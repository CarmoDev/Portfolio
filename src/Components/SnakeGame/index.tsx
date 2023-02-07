import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import useInterval from "../../hooks/useInterval";

import Fruit from "../../assets/Game/images/appleLogo.png";

import left from "../../assets/Game/icons/leftArrow.svg";
import right from "../../assets/Game/icons/rightArrow.svg";
import down from "../../assets/Game/icons/downArrow.svg";
import up from "../../assets/Game/icons/upArrow.svg";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const scale = 50;
const timeDelay = 100;

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isGameStarted, SetGameStarted] = useState(false);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => runGame(), delay);

  useEffect(() => {
    let fruit = document.getElementById("fruit") as HTMLCanvasElement;

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        context.setTransform(scale, 0, 0, scale, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "rgba(67, 217, 173, .7)";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.drawImage(fruit, apple[0], apple[1], 1, 1);
      }
    }
  }, [snake, apple, gameOver]);

  function handleSetScore() {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  function handleStartGame() {
    setSnake(initialSnake);
    setApple(initialApple);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
    SetGameStarted(true);
  }

  function checkCollision(head: number[]) {
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) {
        return true;
      }
    }

    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) {
        return true;
      }
    }
    return false;
  }

  function appleAte(newSnake: number[][]) {
    let coord = apple.map(() => Math.floor((Math.random() * canvasX) / scale));

    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = coord;
      setScore(score + 1);
      setApple(newApple);

      return true;
    }
    return false;
  }

  function runGame() {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);

    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      setGameOver(true);
      SetGameStarted(false);
      handleSetScore();
    }
    if (!appleAte(newSnake)) {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  function handleChangeDirection(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
    }
  }

  return (
    <div
      onKeyDown={(event) => handleChangeDirection(event)}
      className="Container"
    >
      <div className="game">
        <img id="fruit" src={Fruit} alt="fruit" width="30" />

        <canvas
          className="playArea"
          ref={canvasRef}
          width={`${canvasX}`}
          height={`${canvasY}`}
        />

        {gameOver && (
          <div className="gameOver">
            <div>Game Over!</div>
            <h2>Score: {score}</h2>
          </div>
        )}
      </div>

      <div className="gameInformation">
        <div className="HowPlay">
          <div className="text">
            <p>// use keyboard</p>
            <p>// Arrows to play</p>
          </div>

          <img src={up} alt="upArrow" className="arrow" />
          <div className="bottomArrows">
            <img src={left} alt="leftArrow" className="arrow" />
            <img src={down} alt="downArrow" className="arrow" />
            <img src={right} alt="rightArrow" className="arrow" />
          </div>
        </div>

        <div>
          <h2>Score: {score}</h2>
          <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
        </div>

        <button onClick={handleStartGame} className="playButton">
          Start
        </button>
      </div>
    </div>
  );
}
