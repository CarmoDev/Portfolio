import styled, { keyframes } from "styled-components";

const background_change = keyframes`
  from {
    background-position: 0 center;
  } to {
    background-position: -200% center;
  }
`;

export const Container = styled.section`
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 90%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    .bright {
      box-shadow: 150px 100px 200px 80px rgba(77, 91, 206, 0.7),
        -150px -100px 200px 80px rgba(67, 217, 173, 0.7);
    }

    padding: 0 16px;
  }
`;

export const Myself = styled.div`
  color: #e5e9f0;

  p {
    font-size: 16px;
  }

  h1 {
    font-weight: 400;
    font-size: 16px;
  }

  h2 {
    background: linear-gradient(to right, #4d5bce, #43d9ad, #4d5bce);
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
    color: transparent;

    font-weight: 600;
    font-size: 24px;
    white-space: nowrap;

    animation: ${background_change} 3s linear infinite;
  }

  @media screen and (max-width: 1100px) {
    z-index: 10;
  }
`;

export const GameDescription = styled.div`
  .comments {
    color: #607b96;
  }
`;

export const GithubLink = styled.p`
  font-weight: 500;
  color: #4d5bce;

  .githubText {
    color: #43d9ad;
  }

  .equal {
    color: white;
    font-weight: 400;
  }

  .link {
    color: #e99287;
    position: relative;
    cursor: pointer;

    ::after {
      content: "";
      position: absolute;
      background-color: #e99287;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      transition: 0.5s ease-in-out;
    }

    :hover {
      ::after {
        width: 100%;
      }
    }
  }
`;

export const Game = styled.div`
  width: 500px;
  height: 85%;
  padding: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: linear-gradient(
    150.26deg,
    rgba(23, 85, 83, 0.7),
    rgba(67, 217, 173, 0.5)
    );
    border: 1px solid #0c1616;

  box-shadow: 10px 30px 40px rgba(77, 91, 206, 0.4),
    -15px -30px 40px rgba(67, 217, 173, 0.4);
  backdrop-filter: blur(32px);
  border-radius: 8px;
`;
