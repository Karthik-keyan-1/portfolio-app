import { type Project } from "../../../model/Bio";
import {
  Body,
  ItemWrapper,
  Role,
  Skills,
  Span,
  Top,
} from "../Experience/ExperienceCardStyle";
import {
  ProjectCardWrapper,
  ProjectDescription,
  ProjectImage,
  ProjectSkill,
} from "./ProjectCardStyle";
type Props = {
  data: Project;
};

const ProjectCard = ({
  data: { title, description, skills, image },
}: Props) => (
  <ProjectCardWrapper>
    <Top>
      <Body>
        {image && <ProjectImage src={image} />}
        <Role>{title}</Role>
      </Body>
    </Top>
    <br />
    <ProjectDescription>
      {description && <Span>{description}</Span>}
    </ProjectDescription>
    {skills && (
      <>
        <br />
        <Skills>
          <ItemWrapper>
            {skills?.map((skill, index) => (
              <ProjectSkill key={index}>{skill}</ProjectSkill>
            ))}
          </ItemWrapper>
        </Skills>
      </>
    )}
  </ProjectCardWrapper>
);

export default ProjectCard;
