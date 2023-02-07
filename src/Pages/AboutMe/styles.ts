import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  color: white;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
  }
`;
