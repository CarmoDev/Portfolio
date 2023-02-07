import { useState, useRef, useEffect } from "react";

import {
  Folders,
  SectionsContainer,
  SectionContent,
  SectionTitle,
  Contact,
  Content,
  SectionIdentifier,
  Bio,
  NumberContainer,
  Docs,
} from "./styles";

import Arrow from "../../assets/icons/arrow.svg";
import curriculo from "../../assets/download/curriculo.pdf";

import { ReactComponent as Folder } from "../../assets/icons/folder.svg";

import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Markdown } from "../../assets/icons/markdown.svg";

export function Personal() {
  const [isPersonalOpen, setPersonalOpen] = useState(true);
  const [isContactOpen, setContactOpen] = useState(true);

  const [isBioOpen, setBioOpen] = useState(true);
  const [isInterestsOpen, setInterestsOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);

  const [number, setNumber] = useState(0);

  const bioRef = useRef<HTMLDivElement | null>(null);

  function handlePersonalOpen() {
    isPersonalOpen ? setPersonalOpen(false) : setPersonalOpen(true);
  }

  function handleContactOpen() {
    isContactOpen ? setContactOpen(false) : setContactOpen(true);
  }

  function handleBioOpen() {
    if (!isBioOpen) {
      setEducationOpen(false);
      setInterestsOpen(false);
      return setBioOpen(true);
    }

    return setBioOpen(false);
  }

  function handleInterestsOpen() {
    if (!isInterestsOpen) {
      setEducationOpen(false);
      setBioOpen(false);
      return setInterestsOpen(true);
    }

    return setInterestsOpen(false);
  }

  function handleEducationOpen() {
    if (!isEducationOpen) {
      setBioOpen(false);
      setInterestsOpen(false);
      return setEducationOpen(true);
    }

    return setEducationOpen(false);
  }

  useEffect(() => {
    if (bioRef.current) {
      const { clientHeight } = bioRef.current;
      setNumber(Math.floor(clientHeight / 23));
    }
  }, [bioRef]);

  return (
    <>
      <SectionsContainer>
        <section>
          <SectionTitle onClick={handlePersonalOpen}>
            <img src={Arrow} className={isPersonalOpen ? "" : "closed"} />
            <span>personal-info</span>
          </SectionTitle>

          {isPersonalOpen && (
            <SectionContent>
              <Folders onClick={handleBioOpen}>
                <span className={isBioOpen ? "closed" : ""}>{">"}</span>
                <Folder style={{ fill: "#E99287" }} />
                <span className={isBioOpen ? "selected" : ""}>bio</span>
              </Folders>

              {isBioOpen && (
                <Docs href={curriculo} download="Curriculo.pdf">
                  <Markdown />
                  resume
                </Docs>
              )}

              <Folders onClick={handleInterestsOpen}>
                <span className={isInterestsOpen ? "closed" : ""}>{">"}</span>
                <Folder style={{ fill: "#43D9AD" }} />
                <span className={isInterestsOpen ? "selected" : ""}>
                  interests
                </span>
              </Folders>

              {isInterestsOpen && (
                <Docs>
                  <Markdown />
                  next-steps
                </Docs>
              )}

              <Folders onClick={handleEducationOpen}>
                <span className={isEducationOpen ? "closed" : ""}>{">"}</span>
                <Folder style={{ fill: "#3A49A4" }} />
                <span className={isEducationOpen ? "selected" : ""}>
                  education
                </span>
              </Folders>

              {isEducationOpen && (
                <Docs>
                  <Markdown />
                  college
                </Docs>
              )}
            </SectionContent>
          )}
        </section>

        <section>
          <SectionTitle
            onClick={handleContactOpen}
            style={{ borderTop: "1px solid #1e2d3d" }}
          >
            <img src={Arrow} className={isContactOpen ? "" : "closed"} />
            <span>contacts</span>
          </SectionTitle>

          {isContactOpen && (
            <SectionContent>
              <Contact href="mailto:carmodev01@gmail.com">
                <Mail />
                <span>carmodev01@gmail.com</span>
              </Contact>

              <Contact>
                <Phone />
                <span>+55 11 95359-5335</span>
              </Contact>
            </SectionContent>
          )}
        </section>
      </SectionsContainer>

      <Content>
        {window.screen.width >= 780 && (
          <SectionIdentifier>
            <p
              style={{
                borderRight: "1px solid #1e2d3d",
                height: "100%",
                padding: 8,
                width: "30%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>personal-info</span>
              <span>x</span>
            </p>
          </SectionIdentifier>
        )}

        {isBioOpen && (
          <Bio ref={bioRef} className="bio">
            <NumberContainer>
              {Array.from({ length: number }, (_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
            </NumberContainer>
            <p>
              /* Bio <br />
              I have two years of experience as a fullstack javascript
              developer, using React.Js as main tool on my front-end and Node.Js
              on the back-end.
              <br />
              <br />
              I already developed some games, landing pages, blogs and even a
              music player, in case of you have any doubts you can contact me by
              the contacts on the section aside.
              <br /> */
            </p>
          </Bio>
        )}

        {isInterestsOpen && (
          <Bio ref={bioRef} className="interrest">
            <NumberContainer>
              {Array.from({ length: number }, (_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
            </NumberContainer>
            <p>
              /* Next steps
              <br />
              For the future I'm seeking to deepening my knowledge on
              machine-learning and design and I have great interests for AI's
              <br /> */
            </p>
          </Bio>
        )}

        {isEducationOpen && (
          <Bio ref={bioRef} className="education">
            <NumberContainer>
              {Array.from({ length: number }, (_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
            </NumberContainer>
            <p>
              /* Education
              <br />
              I graduated at the Universidade Cruzeiro do Sul in the end of 2022
              on Analisys and systems development.
              <br /> */
            </p>
          </Bio>
        )}
      </Content>
    </>
  );
}
