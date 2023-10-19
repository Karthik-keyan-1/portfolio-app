import {personalInfo, navOptions} from '../../data/AppData';
import HomeIcon from '@mui/icons-material/Home';
import {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {
	Nav,
	NavLogo,
	MobileIcon,
	NavItems,
	ButtonContainer,
	MobileMenu,
	NavbarContainer,
	MobileLink,
	NavLink,
	Span,
} from './NavBarStyled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import EmailIcon from '@mui/icons-material/Email';
import {appConstant} from '../../data/AppConstant';
import React from 'react';
export default function NavBar() {
	const [open, setOpen] = useState(false);
	const {linkedin, mobile, email} = personalInfo;
	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to='/'>
					<a
						style={{
							display: 'flex',
							alignItems: 'center',
							color: 'white',
							marginBottom: '20;',
							cursor: 'pointer',
						}}
					>
						<HomeIcon style={{fontSize: '3rem'}} />
						<Span>{appConstant.appTitle}</Span>
					</a>
				</NavLogo>
				<MobileIcon>
					<FaBars onClick={() => {
						setOpen(curr => !curr);
					}} />
				</MobileIcon>

				<NavItems>
					{navOptions.map((item, index) => (
						<NavLink key={index} href={item.path}>
							{item.name}
						</NavLink>
					))}
				</NavItems>
				<ButtonContainer>
					<LinkedInIcon
						style={{fontSize: '3rem', color: 'white', cursor: 'pointer'}}
						onClick={() => window.open(linkedin, '_blank')}
					/>
					<>
						<RememberMeIcon style={{fontSize: '3rem', color: 'white'}} />
						<NavLink href='#'> {mobile}</NavLink>
					</>
					<>
						<EmailIcon style={{fontSize: '3rem', color: 'white'}} />
						<NavLink href='#'> {email}</NavLink>
					</>
				</ButtonContainer>
				{open && (
					<MobileMenu isOpen={open}>
						{navOptions.map((item, index) => (
							<MobileLink
								key={index}
								href={item.path}
								onClick={() => {
									setOpen(c => !c);
								}}
							>
								{item.name}
							</MobileLink>
						))}
					</MobileMenu>
				)}
			</NavbarContainer>
		</Nav>
	);
}
