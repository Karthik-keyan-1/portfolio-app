import {type Education} from '../../../model/Bio';
import {
	Body,
	Card,
	Company,
	Description,
	Duration,
	Role,
	Span,
	Top,
	Image,
} from '../Experience/ExperienceCardStyle';
import React from 'react';
type Props = {
	data: Education;
};

const EducationCard = ({
	data: {grade, degree, school, duration, image},
}: Props) => (
	<Card>
		<Top>
			<Image src={image} />
			<Body>
				<Role>{school}</Role>
				<Company>{degree}</Company>
				<Duration>{duration}</Duration>
			</Body>
		</Top>
		<Description>{grade && <Span>{grade}</Span>}</Description>
	</Card>
);

export default EducationCard;
