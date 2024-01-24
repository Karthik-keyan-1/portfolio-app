/* eslint-disable @typescript-eslint/naming-convention */
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;
const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
`;
export { ProjectContainer, ProjectWrapper, RowFlex };
