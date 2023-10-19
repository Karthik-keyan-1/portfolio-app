import {Wrapper, Title, Desc, Container} from './experienceStyle';
import {experience} from '../../data/AppData';
import ExperienceCard from '../Card/Experience/ExperienceCard';
import {appConstant} from '../../data/AppConstant';
import React from 'react';
const Experience = () => {
	const {
		experience: {title, description},
	} = appConstant;
	return (
		<Container id='experience'>
			<Wrapper>
				<Title>{title}</Title>
				<Desc>{description}</Desc>
				{experience.map((exp, index) => (
					<ExperienceCard key={index} data={exp} />
				))}
			</Wrapper>
		</Container>
	);
};

export default Experience;
