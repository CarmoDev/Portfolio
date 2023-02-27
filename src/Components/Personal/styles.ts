import styled, { keyframes } from "styled-components";

const TopToBottom = keyframes`
  0% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

export const SectionsContainer = styled.section`
  width: 18%;
  border-right: 1px solid #1e2d3d;

  @media screen and (max-width: 1100px) {
    width: 100%;
    align-self: flex-start;
  }
`;

export const SectionTitle = styled.button`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: white;
  background-color: transparent;

  text-align: start;

  border: 0;
  border-bottom: 1px solid #1e2d3d;

  font-size: 16px;
  transition: 1s;

  img {
    transform: rotate(0);
    transition: 0.2s;
    margin-right: 4px;
  }

  .closed {
    transform: rotate(-90deg);
    transition: 0.2s;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 500;
  padding-bottom: 8px;

  animation: ${TopToBottom} 0.3s -0.1s linear forwards;

  @media screen and (max-width: 1100px) {
    :last-of-type {
      border-bottom: 1px solid #1e2d3d;
    }
  }
`;

export const Folders = styled.button`
  padding: 8px;
  color: #607b96;
  background-color: transparent;
  width: 100%;
  border: none;
  font-weight: 600;
  display: flex;
  cursor: pointer;

  span {
    width: 10px;
    transform: rotate(0deg);
    transition: 0.5s;
  }

  .closed {
    transform: rotate(90deg);
  }

  .selected {
    color: #fafafa;
  }

  svg {
    margin: 0 8px;
  }
`;

export const Docs = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  text-decoration: none;
  color: #607b96;
  font-weight: 600;
  margin-left: 15%;
  cursor: pointer;

  svg {
    width: 12px;
  }
`;

export const Contact = styled.a`
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 8px;
  color: #607b96;

  text-decoration: none;

  svg {
    margin: 0 4px;
    width: 14px;
  }

  span {
    position: relative;
  }

  span:after {
    content: "";
    width: 0;
    height: 1px;
    background-color: #607b96;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
  }

  :hover {
    span:after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #607b96;
      position: absolute;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  border-right: 1px solid #1e2d3d;

  @media screen and (max-width: 1100px) {
    width: 100%;
    overflow: scroll;
  }
`;

export const SectionIdentifier = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;

  color: #607b96;
  background-color: transparent;

  text-align: start;

  border: 0;
  border-bottom: 1px solid #1e2d3d;

  font-size: 16px;
  transition: 1s;
`;

export const BioContainer = styled.div``;

export const Bio = styled.div`
  margin-left: 3%;
  color: #607b96;
  max-width: 80%;
  display: flex;
  gap: 32px;

  p {
    line-height: 23px;
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: end;
  }
`;
