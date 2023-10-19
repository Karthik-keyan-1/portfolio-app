import {type Project} from '../../../model/Bio';
import {
	Body,
	ItemWrapper,
	Role,
	Skill,
	Skills,
	Span,
	Top,
} from '../Experience/ExperienceCardStyle';
import {
	ProjectCardWrapper,
	ProjectDescription,
	ProjectSkill,
} from './ProjectCardStyle';
import React from 'react';
type Props = {
	data: Project;
};

const ProjectCard = ({data: {title, description, skills}}: Props) => (
	<ProjectCardWrapper>
		<Top>
			<Body>
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
