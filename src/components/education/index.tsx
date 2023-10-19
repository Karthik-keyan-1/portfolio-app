import {appConstant} from '../../data/AppConstant';
import {education} from '../../data/AppData';
import EducationCard from '../Card/Education/EducationCard';
import {Container, Title, Wrapper} from '../experience/experienceStyle';
import React from 'react';
const Education = () => (
	<Container id='education' style={{marginBottom: '50px'}}>
		<Wrapper>
			<Title>{appConstant.educationTitle}</Title>
			{education?.map((edu, index) => (<EducationCard key={index} data={edu} />))}
		</Wrapper>
	</Container>
);

export default Education;
