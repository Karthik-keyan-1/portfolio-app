import {appConstant} from '../../data/AppConstant';
import {project} from '../../data/AppData';
import ProjectCard from '../Card/Project/ProjectCard';
import {Desc, Title} from '../experience/experienceStyle';
import {ProjectContainer, ProjectWrapper, RowFlex} from './projectStyle';
import React from 'react';
const Project = () => {
	const {
		project: {title, description},
	} = appConstant;
	return (
		<ProjectContainer id='project'>
			<ProjectWrapper>
				<Title>{title}</Title>
				<Desc>{description}</Desc>
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
