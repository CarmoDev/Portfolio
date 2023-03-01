import styled, { keyframes } from "styled-components";

const TopToBottom = keyframes`
  0% {
    -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    overflow-y: scroll; 
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
  animation: ${TopToBottom} 0.55s -0.45s linear forwards;
`;

export const Contact = styled.a`
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  padding: 8px;
  color: #607b96;

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
  width: 80%;
  border-right: 1px solid #1e2d3d;

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
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
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    border-top: 1px solid #1e2d3d;

    p {
      border: none;
      padding: 0;
    }
  }
`;

export const ContactContainer = styled.form`
  width: fit-content;
  height: 80%;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: relative;

  .content {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 60%;

    @media screen and (max-width: 1100px) {
      width: 80%;
    }
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #011221 inset;
    -webkit-box-shadow: 0 0 0 30px #011221 inset;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #465e77 !important;
  }

  ::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 120%;
    background-color: #1e2d3d;
    right: 0;
    top: 0;
  }

  @media screen and (max-width: 1100px) {
    align-self: flex-end;
    width: 100%;
    height: 100%;
    position: initial;

    ::after {
      display: none;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #607b96;
  font-size: 16px;
  width: 100%;
`;

export const ContactInfo = styled.input`
  background-color: #011221;
  border: 2px solid #1e2d3d;
  border-radius: 8px;
  color: #465e77;
  padding: 10px 8px;
  font-weight: 600;

  &:focus {
    border: 1px solid #607b96;
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
    outline: 0;
  }
`;

export const MessageArea = styled.textarea`
  background-color: #011221;
  border: 2px solid #1e2d3d;
  border-radius: 8px;
  color: #465e77;
  padding: 10px 8px;
  font-weight: 600;
  resize: none;

  &:focus {
    border: 1px solid #607b96;
    box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
    outline: 0;
  }
`;

export const Submit = styled.button`
  background-color: #1c2b3a;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  letter-spacing: 2px;
  align-self: flex-start;

  :hover {
    transform: scale(1.01);
  }

  :active {
    box-shadow: inset 9.91px 9.91px 15px #192735,
      inset -9.91px -9.91px 15px #1f2f3f;
  }

  :hover {
    background-color: #2d4054;
  }

  @media screen and (max-width: 1100px) {
    align-self: center;
  }
`;

export const Submitted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 90%;
  position: relative;
  gap: 20px;
  padding: 16px;

  div {
    text-align: center;
    max-width: 80%;
  }

  h1 {
    color: white;
  }

  h2 {
    color: #607b96;
    line-height: 28px;
  }

  ::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 110%;
    background-color: #1e2d3d;
    right: 0;
    top: 0;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Code = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 20px;
  margin-left: 2%;
`;

export const CodeText = styled.div`
  p {
    color: #607b96;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: #607b96;

  p {
    line-height: 20px;
    text-align: end;
    font-size: 16px;
  }
`;

export const Purple = styled.span`
  color: #c98bdf;
`;
export const Blue = styled.span`
  color: #5565e8;
`;
export const Orange = styled.span`
  color: #fea55f;
`;
