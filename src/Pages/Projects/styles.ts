import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #607b96;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
      background-color: #011627;
    }
  }
`;

export const SectionsContainer = styled.section`
  width: 18%;
  border-right: 1px solid #1e2d3d;

  @media screen and (max-width: 1100px) {
    width: 100%;
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
`;

export const Folders = styled.div`
  padding: 8px;
  color: #607b96;
  width: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;

  svg {
    margin: 0 8px 0 0;
    width: 24px;
  }

  label {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 80%;
  border-right: 1px solid #1e2d3d;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
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

  p {
    border-right: 1px solid #1e2d3d;
    height: 100%;
    padding: 8px;
    width: fit-content;
    display: flex;
  }

  @media screen and (max-width: 1100px) {
    justify-content: center;
    
    p {
      border: none;
    }
  }
`;

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 20px;
  align-items: flex-start;
  justify-items: center;
  margin-top: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #607b96;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #011627;
  }

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Project = styled.div`
  width: 80%;
  height: fit-content;

  text-decoration: none;
  background-color: #011221;
  color: #607b96;
  font-weight: 600;

  border: 1px solid #1e2d3d;
  border-radius: 16px;
  padding: 8px;

  position: relative;

  &:last-of-type {
    margin-bottom: 20%;
  }

  .title {
    text-align: center;
  }

  .imgWrapper {
    width: 100%;
    height: 160px;
    max-height: 70%;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    object-fit: cover;

    .projectTag {
      position: absolute;
      width: fit-content;
      height: fit-content;
      object-fit: cover;
      right: 10px;
      top: 10px;
      z-index: 2 00;
      background-color: #86e1f9;
      display: flex;
      padding: 4px;
      border-radius: 8px;

      svg path {
        fill: #011221;
      }
    }
  }

  .projectImg {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    transition: 0.3s;
  }

  .viewBtn {
    background-color: #1c2b3a;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 14px;
    margin-top: 16px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      transform: scale(1.04);
      background-color: #2d4054;
    }
  }

  :hover {
    img {
      transform: scale(1.05);
      object-fit: cover;
    }
  }
`;
