import {Container} from '@mui/material';
import {Title} from '../coverpage/coverPageStyle';
import {
	Skill,
	SkillImage,
	SkillItem,
	SkillList,
	SkillTitle,
	SkillsContainer,
	Wrapper,
} from './SkillStyle';
import {skillInfo} from '../../data/AppData';
import {type SkillDetail} from '../../model/Bio';
import {appConstant} from '../../data/AppConstant';
import React from 'react';
const Skills = () => (
	<Container id='skills'>
		<Wrapper>
			<Title> {appConstant.skillsTitle}</Title>
			{/* <Desc>These are my skill</Desc> */}
			<SkillsContainer>
				{skillInfo.map((skill: SkillDetail, index) => (
					<Skill key={index}>
						<SkillTitle>{skill.category}</SkillTitle>
						<SkillList>
							{skill.skills.map((item, indx) => (
								<SkillItem key={indx}>
									<SkillImage src={item.image} />
									{item.name}
								</SkillItem>
							))}
						</SkillList>
					</Skill>
				))}
			</SkillsContainer>
		</Wrapper>
	</Container>
);

export default Skills;
