import { ContactMe, Container, Sections, Title } from "./styles";

import GithubIcon from "../../assets/icons/github.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <Container>
      <Sections>
        <Title>find me in:</Title>
        <a href="https://github.com/CarmoDev">
          <img src={GithubIcon} alt="Github" />
        </a>
        <a href="https://www.instagram.com/carmo.dev/">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/jefferson-santos-b22701231/">
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
      </Sections>

      {window.screen.width >= 780 && (
        <ContactMe href="https://github.com/CarmoDev" target="_blank">
          @Carmo.Dev
          <img src={GithubIcon} alt="Github" />
        </ContactMe>
      )}
    </Container>
  );
}
