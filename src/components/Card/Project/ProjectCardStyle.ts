/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';
import {Span} from '../Experience/ExperienceCardStyle';

const ProjectCardWrapper = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({theme}) => theme.card as string};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const ProjectDescription = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme}) => theme.text_primary as number + 99};
  margin-bottom: 10px;
  margin-top: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProjectSkill = styled.div`
  font-size: 15px;
  font-weight: 400;
  border: solid 1px ${({theme}) => theme.text_primary as number + 99};
  border-radius: 25px;
  padding: 4px 10px;
  color: ${({theme}) => theme.primary as number + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export {ProjectCardWrapper, ProjectDescription, ProjectSkill};
