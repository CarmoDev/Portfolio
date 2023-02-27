import styled,{keyframes} from "styled-components";

export const write = keyframes`
  0% {
    stroke-dashoffset: 554; // tamanho inicial
  }
  100% {
    stroke-dashoffset: 0; // tamanho final
  }
`

export const Container = styled.main`
  width: 95dvw;
  height: 95dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #011627;

  border: 1px solid #1e2d3d;
  border-radius: 8px;
  margin: 1.6% auto;

  @media screen and (max-width: 1100px) {
    height: 98dvh;
    justify-content: space-between;
    overflow: hidden;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg path {
    stroke: #0094F3;
    stroke-width: 10;
    stroke-dasharray: 554;
    animation: ${write} 3s infinite alternate;
  }
`;