import { appConstant } from "../../data/AppConstant";
import { project } from "../../data/AppData";
import ProjectCard from "../Card/Project/ProjectCard";
import { Title } from "../experience/experienceStyle";
import { ProjectContainer, ProjectWrapper, RowFlex } from "./projectStyle";
const Project = () => {
  return (
    <ProjectContainer id="project">
      <ProjectWrapper>
        <Title>{appConstant.projectTitle}</Title>
        {/* <Desc>{description}</Desc> */}
        <RowFlex>
          {project.map((proj, index) => (
            <ProjectCard data={proj} key={index} />
          ))}
        </RowFlex>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
