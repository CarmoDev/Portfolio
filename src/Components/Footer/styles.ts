import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  border-top: 1px solid #1e2d3d;
  color: #607b96;
  justify-content: space-between;

  a:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  padding: 8px 16px;
`;

export const Sections = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  text-align: center;

  @media screen and (max-width: 1100px) {
    p {
      width: 180px;
      max-width: 48%;
    }

    a {
      :last-of-type {
        border-bottom-right-radius: 8px;
      }
    }
  }

  a {
    height: 100%;
    border: 1px solid #1e2d3d;
    display: flex;
    align-items: center;

    img {
      transition: 0.3s;
    }

    :hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  img {
    padding: 8px 16px;
  }
`;

export const ContactMe = styled.a`
  border-left: 1px solid #1e2d3d;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  text-decoration: none;
  color: #607b96;

  img {
    margin-left: 8px;
  }
`;
