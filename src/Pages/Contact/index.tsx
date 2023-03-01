import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import moment from "moment";

import { sendEmail } from "../../utils/sendEmail";

import {
  SectionsContainer,
  SectionTitle,
  Content,
  SectionIdentifier,
  Container,
  SectionContent,
  Contact,
  ContactInfo,
  ContactInfoContainer,
  MessageArea,
  ContactContainer,
  Submit,
  Code,
  Purple,
  Blue,
  Orange,
  NumberContainer,
  CodeText,
  Submitted,
} from "./styles";

import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as RedirectIcon } from "../../assets/icons/redirect.svg";

import Arrow from "../../assets/icons/arrow.svg";

export default function Contacts() {
  const [isContactOpen, setContactOpen] = useState(true);
  const [isFindOpen, setFindOpen] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(0);
  const [submitted, setSubmitted] = useState(true);

  const codeRef = useRef<HTMLDivElement | null>(null);

  const currentDate = moment().format("ddd DD MMM");

  function handleContactOpen() {
    isContactOpen ? setContactOpen(false) : setContactOpen(true);
  }

  function handleFindOpen() {
    isFindOpen ? setFindOpen(false) : setFindOpen(true);
  }

  function handleNameChange(event: any) {
    setName(event.target.value);
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event: any) {
    setMessage(event.target.value);
  }

  function handleSendEmail(event: FormEvent) {
    sendEmail(event).then(() => setSubmitted(true));
  }

  useEffect(() => {
    if (codeRef.current) {
      const { clientHeight } = codeRef.current;
      setNumber(Math.floor(clientHeight / 20));
    }
  }, [codeRef]);

  return (
    <Container>
      <SectionsContainer>
        <SectionTitle onClick={handleContactOpen}>
          <img src={Arrow} className={isContactOpen ? "" : "closed"} />
          <span>contacts</span>
        </SectionTitle>

        {isContactOpen && (
          <SectionContent>
            <Contact>
              <Mail />
              <span>carmodev01@gmail.com</span>
            </Contact>

            <Contact>
              <Phone />
              <span>+55 11 95359-5335</span>
            </Contact>
          </SectionContent>
        )}

        <SectionTitle
          onClick={handleFindOpen}
          style={{ borderTop: "1px solid #1e2d3d" }}
        >
          <img src={Arrow} className={isFindOpen ? "" : "closed"} />
          <span>find-me-also-in</span>
        </SectionTitle>

        {isFindOpen && (
          <SectionContent>
            <Contact
              href="https://www.instagram.com/carmo.dev/"
              target="_blank"
            >
              <RedirectIcon />
              <span>instagram account</span>
            </Contact>

            <Contact
              href="https://www.linkedin.com/in/jefferson-santos-b22701231/"
              target="_blank"
            >
              <RedirectIcon />
              <span>linkedin</span>
            </Contact>
          </SectionContent>
        )}

        <SectionContent></SectionContent>
      </SectionsContainer>

      <Content>
        <SectionIdentifier>
          <p>
            <span>contact</span>
            <span>x</span>
          </p>
        </SectionIdentifier>

        <section>
          {!submitted ? (
            <ContactContainer onSubmit={handleSendEmail}>
              <div className="content">
                <ContactInfoContainer>
                  <label>$ name:</label>
                  <ContactInfo
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    aria-label="name"
                    name="name"
                  />
                </ContactInfoContainer>

                <ContactInfoContainer>
                  <label>$ email:</label>
                  <ContactInfo
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    aria-label="email"
                    name="email"
                  />
                </ContactInfoContainer>

                <ContactInfoContainer>
                  <label>$ message:</label>
                  <MessageArea
                    value={message}
                    onChange={handleMessageChange}
                    aria-label="message"
                    name="message"
                    rows={5}
                    cols={22}
                  />
                </ContactInfoContainer>

                <Submit type="submit">submit-message</Submit>
              </div>
            </ContactContainer>
          ) : (
            <Submitted>
              <div>
                <h1>Thank you!🔥</h1>
                <h2>
                  your message has been sented. you will receive a answer really
                  soon! have a good day!
                </h2>
              </div>

              <Submit
                onClick={() => setSubmitted(false)}
                style={{
                  marginLeft: 0,
                }}
              >
                send-new-message
              </Submit>
            </Submitted>
          )}

          {window.screen.width >= 1100 && (
            <Code>
              <NumberContainer>
                {Array.from({ length: number }, (_, index) => (
                  <p key={index}>{index + 1}</p>
                ))}
              </NumberContainer>

              <CodeText ref={codeRef}>
                <p className="btn">
                  <Purple>const</Purple> <Blue>button</Blue> <Purple>=</Purple>{" "}
                  <Blue>document.querySelector</Blue>(
                  <Orange>"#sendBtn"</Orange>
                  );
                </p>
                <br />
                <p className="message">
                  <Purple>const</Purple> <Blue>Message</Blue> <Purple>=</Purple>{" "}
                  {"{"}
                  <br />
                  &nbsp;<Blue> name:</Blue> <Orange>"{name}"</Orange>,
                  <br />
                  &nbsp;<Blue> email:</Blue> <Orange>"{email}"</Orange>,
                  <br />
                  &nbsp;<Blue> message:</Blue> <Orange>"{message}"</Orange>,
                  <br />
                  &nbsp;&nbsp;date: <Orange>"{currentDate}"</Orange>
                  <br />
                  {"}"}
                </p>
                <br />
                <p>
                  <Blue>button</Blue>.<Blue>addEventListener</Blue>(
                  <Orange>'click'</Orange>, () <Purple> {"=>"} </Purple> {"{"}
                  <br />
                  &nbsp;&nbsp;<Blue>form</Blue>
                  {"."}
                  <Blue>send</Blue>(<Blue>message</Blue>);
                  <br />
                  {"}"})
                </p>
              </CodeText>
            </Code>
          )}
        </section>
      </Content>
    </Container>
  );
}
