import SnakeGame from "../../Components/SnakeGame";
import {
  Container,
  Description,
  Game,
  GameDescription,
  GithubLink,
  Myself,
} from "./styles";

export default function Hero() {
  return (
    <Container>
      <Description>
        <Myself>
          <p>What's up, I'm</p>
          <h1>Jefferson Santos</h1>
          <h2>{"> "}Fullstack JS developer</h2>
        </Myself>

        {window.screen.width <= 1100 && <div className="bright"></div>}

        {window.screen.width >= 720 ? (
          <GameDescription>
            <p className="comments">// This is a Snake game that I developed</p>
            <p className="comments">// you also can see it on my Github</p>
            <GithubLink>
              const
              <span className="githubText"> githubLink</span>
              <span className="equal"> = </span>
              <span className="link">
                "https://github.com/CarmoDev/PurpleSnake"
              </span>
            </GithubLink>
          </GameDescription>
        ) : (
          <GameDescription>
            <p className="comments">// find my profile on Github:</p>
            <br />
            <GithubLink>
              const
              <span className="githubText"> githubLink</span>
              <span className="equal"> = </span>
              <span className="link">"https://github.com/CarmoDev"</span>
            </GithubLink>
          </GameDescription>
        )}
      </Description>

      {window.screen.width >= 1100 && (
        <Game>
          <SnakeGame />
        </Game>
      )}
    </Container>
  );
}
