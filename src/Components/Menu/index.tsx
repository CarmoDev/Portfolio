import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  ContactMe,
  Container,
  HamburguerMenu,
  OptionsList,
  Sections,
  Title,
} from "./styles";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState("");

  function handleMenuOpen() {
    const isMenuOpen = menuOpen === "ativo" ? "" : "ativo";

    setMenuOpen(isMenuOpen);
  }

  return (
    <Container>
      <Title>
        <Logo width={48} />
        <span>carmo.dev</span>
      </Title>

      {window.screen.width <= 1100 ? (
        <div>
          <HamburguerMenu onClick={handleMenuOpen} className={menuOpen} aria-label="Navigation" />

          <Sections>
            <OptionsList className={menuOpen}>
              <NavLink
                onClick={() => setMenuOpen("")}
                to={`/`}
                className={({ isActive }) => (isActive ? "Active" : undefined)}
              >
                <p>$ hello</p>
              </NavLink
                >

              <NavLink
                onClick={() => setMenuOpen("")}
                to={"/about"}
                className={({ isActive }) => (isActive ? "Active" : undefined)}
              >
                <p>$ about-me</p>
              </NavLink
                >

              <NavLink
                onClick={() => setMenuOpen("")}
                to={"/project"}
                className={({ isActive }) => (isActive ? "Active" : undefined)}
              >
                <p>$ Projects</p>
              </NavLink
                >

              <NavLink
                onClick={() => setMenuOpen("")}
                to={"/contact"}
                className={({ isActive }) => (isActive ? "Active" : undefined)}
              >
                <p>$ contact-me</p>
              </NavLink>
            </OptionsList>
          </Sections>
        </div>
      ) : (
        <>
          <Sections>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? "Active" : undefined)}
            >
              <p>$ hello</p>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "Active" : undefined)}
            >
              <p>$ about-me</p>
            </NavLink>
            <NavLink
              to={"/project"}
              className={({ isActive }) => (isActive ? "Active" : undefined)}
            >
              <p>$ Projects</p>
            </NavLink>
          </Sections>

          <ContactMe>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "Active" : undefined)}
            >
              <p>$ contact-me</p>
            </NavLink>
          </ContactMe>
        </>
      )}
    </Container>
  );
}
