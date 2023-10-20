import { appConstant } from "../../../data/AppConstant";
import { type Experience } from "../../../model/Bio";
import {
  Image,
  Body,
  Card,
  Company,
  Description,
  Duration,
  ItemWrapper,
  Role,
  Skill,
  Skills,
  Span,
  Top,
} from "./ExperienceCardStyle";
import React from "react";
type Props = {
  data: Experience;
};
const ExperienceCard = ({
  data: { company, role, description, duration, skills, img },
}: Props) => (
  <Card>
    <Top>
      <Image src={img} />
      <Body>
        <Role>{role}</Role>
        <Company>{company}</Company>
        <Duration>{duration}</Duration>
      </Body>
    </Top>
    <Description>
      {description && <Span>{description}</Span>}
      {skills && (
        <>
          <br />
          <Skills>
            <b>{appConstant.skillsTitle}:</b>
            <ItemWrapper>
              {skills?.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        </>
      )}
    </Description>
  </Card>
);

export default ExperienceCard;
