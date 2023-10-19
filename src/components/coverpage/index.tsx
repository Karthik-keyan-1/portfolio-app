import {appConstant} from '../../data/AppConstant';
import {personalInfo} from '../../data/AppData';
import BgAnimation from '../BgAnimation';
import {
	HeroBg,
	HeroContainer,
	HeroInnerContainer,
	HeroLeftContainer,
	HeroRightContainer,
	Img,
	ResumeButton,
	Span,
	SubTitle,
	TextLoop,
	Title,
} from './coverPageStyle';
import Typewriter from 'typewriter-effect';
import React from 'react';
const CoverPage = () => {
	const {name, roles, objective, resume} = personalInfo;
	const imagePath = '/images/Avatar.jpg';
	console.log(imagePath);

	return (
		<div id='about'>
			<HeroContainer>
				<HeroBg>{/* <BgAnimation /> */}</HeroBg>
				<HeroInnerContainer>
					<HeroLeftContainer id='Left'>
						<Title>
							{appConstant.welcomeMessage}
							<br /> {name}
						</Title>
						<TextLoop>
							<Span>
								<Typewriter
									options={{
										strings: roles,
										autoStart: true,
										loop: true,
									}}
								/>
							</Span>
						</TextLoop>
						<SubTitle>{objective}</SubTitle>
						<ResumeButton href={resume} target='display'>
							{appConstant.checkResume}
						</ResumeButton>
					</HeroLeftContainer>
					<HeroRightContainer id='Right'>
						<Img src={imagePath} alt='hero-image' />
					</HeroRightContainer>
				</HeroInnerContainer>
			</HeroContainer>
		</div>
	);
};

export default CoverPage;
