import { useEffect, useState } from "react";

import { AllProjects } from "../../utils/projects";

import {
  SectionsContainer,
  SectionTitle,
  Content,
  SectionIdentifier,
  Container,
  Project,
  ProjectContainer,
  SectionContent,
  Folders,
} from "./styles";

import Checkbox from "@mui/material/Checkbox";

import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as NodeIcon } from "../../assets/icons/node.svg";
import { ReactComponent as MongoIcon } from "../../assets/icons/mongodb.svg";
import { ReactComponent as PostgreIcon } from "../../assets/icons/postgre.svg";

import Arrow from "../../assets/icons/arrow.svg";

export default function Projects() {
  const [isPersonalOpen, setPersonalOpen] = useState(true);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(AllProjects);

  function handleSelectedTech(event: any) {
    const isCompleted = selectedTech.includes(event.target.value);

    if (isCompleted) {
      const filteredArrays = selectedTech.filter(
        (tech) => tech !== event.target.value
      );
      setSelectedTech(filteredArrays);
      return;
    }

    setSelectedTech([...selectedTech, event.target.value]);
  }

  useEffect(() => {
    if (selectedTech.length === 0) {
      setFilteredProjects(AllProjects);
    } else {
      setFilteredProjects(
        AllProjects.filter((project) =>
          selectedTech.some((tech) => project.tag.includes(tech))
        )
      );
    }
  }, [selectedTech]);

  function handlePersonalOpen() {
    isPersonalOpen ? setPersonalOpen(false) : setPersonalOpen(true);
  }

  return (
    <Container>
      <SectionsContainer>
        <section>
          <SectionTitle onClick={handlePersonalOpen}>
            <img src={Arrow} className={isPersonalOpen ? "" : "closed"} />
            <span>projects</span>
          </SectionTitle>
        </section>

        {isPersonalOpen && (
          <SectionContent>
            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="HTML"
                onChange={handleSelectedTech}
              />
              <label>
                <HtmlIcon /> HTML5
              </label>
            </Folders>

            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="CSS"
                onChange={handleSelectedTech}
              />
              <label>
                <CssIcon /> CSS3
              </label>
            </Folders>

            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="React"
                onChange={handleSelectedTech}
              />
              <label>
                <ReactIcon /> React
              </label>
            </Folders>

            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="TypeScript"
                onChange={handleSelectedTech}
              />
              <label>
                <TypescriptIcon /> TypeScript
              </label>
            </Folders>

            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="Node"
                onChange={handleSelectedTech}
              />
              <label>
                <NodeIcon /> Node
              </label>
            </Folders>

            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="mongo"
                onChange={handleSelectedTech}
              />
              <label>
                <MongoIcon /> MongoDB
              </label>
            </Folders>

            <Folders>
              <Checkbox
                sx={{
                  color: "#607B96",
                  "&.Mui-checked": {
                    color: "#607B96",
                  },
                }}
                value="postgre"
                onChange={handleSelectedTech}
              />
              <label>
                <PostgreIcon /> PostgreSQL
              </label>
            </Folders>
          </SectionContent>
        )}
      </SectionsContainer>

      <Content>
        <SectionIdentifier>
          <p>
            {selectedTech.length !== 0 ? (
              selectedTech.map((tech, i) => {
                return <span key={i}>{tech};&nbsp;</span>;
              })
            ) : (
              <span>All Projects</span>
            )}
          </p>
        </SectionIdentifier>

        <ProjectContainer>
          {filteredProjects.map(({ id, tag, url, name, image }: any) => {
            return (
              <Project key={id}>
                <div className="imgWrapper">
                  <div className="projectTag">
                    {tag.includes("HTML") && <HtmlIcon />}
                    {tag.includes("React") && <ReactIcon />}
                    {tag[0] === 'Node' && <NodeIcon />}
                  </div>
                  <img src={image} alt={name} className="projectImg" />
                </div>

                <p className="title">{name}</p>

                <a href={url} target="_blank">
                  <button className="viewBtn">View-Project</button>
                </a>
              </Project>
            );
          })}
        </ProjectContainer>
      </Content>
    </Container>
  );
}
