import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  height: 8dvh;
  align-items: center;
  border-bottom: 1px solid #1e2d3d;
  color: #607b96;
  justify-content: space-between;

  a:hover {
    cursor: pointer;
  }
`;

export const HamburguerMenu = styled.button`
  display: flex;
  background: transparent;
  align-items: center;
  border: none;
  border-radius: 4px;
  color: #607b96;
  cursor: pointer;
  position: relative;
  z-index: 300;
  width: 30px;
  height: 20px;
  margin-right: 8px;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    height:  4px;
    width: 30px;
    background-color: #607b96;
    box-shadow: 0 6px #607b96, 0 -6px #607b96;
    border-radius: 20px;
    transition: 0.3s;
  }

  &::after {
    position: absolute;
    box-shadow: none;
  }

  &.ativo::after {
    transform: rotate(-45deg);
  }

  &.ativo::before {
    transform: rotate(45deg);
    box-shadow: none;
  }
`;

export const Title = styled.div`
  margin-right: -20%;
  margin-left: 2%;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 300;

  span {
    font-size: 24px;
    font-weight: bold;
  }

  /* @media screen and (max-width: 1100px) {
    margin-left: 0;
    
    span {
      font-size: 3em;
    }

    svg {
      width: 5em;
    }
  } */
`;

export const Sections = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  .Active {
    border-bottom: 3px solid #fea55f;
    color: #fff;
  }

  a {
    height: 100%;
    border: 1px solid #1e2d3d;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #607b96;

    :focus {
      border-bottom: 3px solid #fea55f;
    }
  }

  p {
    padding: 0 24px;
  }
`;

export const ContactMe = styled.div`
  border-left: 1px solid #1e2d3d;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #607b96;
    width: 100%;
    height: 100%;
  }

  p {
    padding: 0 24px;
  }

  .Active {
    border-bottom: 3px solid #fea55f;
    color: #fff;
  }
`;

export const OptionsList = styled.ul`
  height: 0;
  width: 0;
  background-color: #011627;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  font-size: 0;

  opacity: 0;
  z-index: 250;

  top: 15px;
  right: 10px;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  transition: 0.4s;

  &.ativo {
    font-size: 12px;
    opacity: 1;
    height: 80%;
    width: 95%;
    padding-top: 15%;

    a {
      border: 0;
      border-bottom: 1px solid #1e2d3d;
      width: 100%;
      height: fit-content;
      padding: 10px 0;
    }

    a:first-of-type {
      border-top: 1px solid #1e2d3d;
    }
  }
`;
