import React from "react";
import { ProjectContainer, ProjectWrapper } from "../project/projectStyle";
import { Desc } from "../skills/SkillStyle";
import { Title } from "../experience/experienceStyle";
import { certificateList } from "../../data/AppData";
import styled from "styled-components";
import { appConstant } from "../../data/AppConstant";

type Props = Record<string, unknown>;
const CertItem = styled.li`
  color: ${({ theme }) => theme.text_primary as string};
  font-size: 1.4rem;
  font-weight: 250;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Certificate = (props: Props) => (
  <ProjectContainer id="project" style={{ marginBottom: "30px" }}>
    <ProjectWrapper>
      <Title>{appConstant.certificateTitle}</Title>

      {certificateList?.map((cert, index) => (
        <CertItem key={index}>{cert.title}</CertItem>
      ))}
    </ProjectWrapper>
  </ProjectContainer>
);

export default Certificate;
