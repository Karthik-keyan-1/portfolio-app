/* eslint-disable @typescript-eslint/naming-convention */
import {
	type Bio,
	type Certification,
	type Education,
	type Experience,
	type NavOption,
	type Project,
	type SkillDetail,
} from '../model/Bio';

// Add resume drive link
export const personalInfo: Bio = {
	name: 'karthikeyan',
	roles: ['Software Engineer', 'Full Stack Developer'],
	objective: `💻 Crafting digital dreams and turning lines of code into extraordinary experiences.
  I'm a passionate software engineer on a mission to make the digital world smarter, sleeker, and more user-friendly, one project at a time`,
	linkedin: 'https://www.linkedin.com/in/karthikeyan-s-604613136/',
	resume: '',
	email: 'skarthikeyan8197@gmail.com',
	mobile: '+91 9789123235',
};

export const skillInfo: SkillDetail[] = [
	{
		category: 'Frontend',
		skills: [
			{
				name: 'React',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
			},
			{
				name: 'Redux',
				image:
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
			},
			{
				name: 'BootStrap',
				image:
          'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
			},
			{
				name: 'HTML',
				image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
			},
			{
				name: 'Kendo UI',
				image:
          'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/author-images/progress-blog-default-logo-transparent.png?sfvrsn=c1207fac_1',
			},
			{
				name: 'CSS',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
			},
			{
				name: 'TypeScript',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
			},
		],
	},
	{
		category: 'Backend',
		skills: [
			{
				name: '.Net Core',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
			},
			{
				name: 'Entity Framework',
				image:
          'https://plugins.jetbrains.com/files/18147/403475/icon/pluginIcon.svg',
			},
			{
				name: 'Web API',
				image: 'https://pic.onlinewebfonts.com/thumbnails/icons_178343.svg',
			},
			{
				name: 'Dapper',
				image:
          'https://repository-images.githubusercontent.com/1613345/9d4ed380-a8e8-11eb-9f21-c8c87b0f4275',
			},
			{
				name: 'SQL Server',
				image:
          'https://unifysolutions.net/supportedproduct/microsoft-sql-server/SQL-Databases.svg',
			},
			{
				name: 'Moq',
				image: 'https://avatars.githubusercontent.com/u/1434934?s=200&v=4',
			},
			{
				name: 'Azure',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png',
			},
		],
	},
	{
		category: 'Others',
		skills: [
			{
				name: 'Git',
				image:
          'https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667',
			},
			{
				name: 'GitHub',
				image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
			},
			{
				name: 'Docker',
				image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
			},
			{
				name: 'Netlify',
				image:
          'https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png',
			},
			{
				name: 'VS Code',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
			},
			{
				name: 'Postman',
				image:
          'https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667',
			},
			{
				name: 'Visual Studio',
				image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png',
			},
		],
	},
];

export const experience: Experience[] = [
	{
		Id: 1,
		company: 'SafeSend Technologies',
		img: 'https://safesend.com/wp-content/uploads/2023/09/SafeSend_logo_BlogSize_1200x628.png',
		role: 'Software Engineer',
		duration: 'Aug 2022 - Present',
		description: 'Worked as a Full stack Developer',
		skills: [
			'React',
			'Redux',
			'Typescript',
			'.Net Core',
			'API',
			'SQL Server',
			'Azure',
		],
	},
	{
		Id: 2,
		company: 'HashedIn By Deloitte',
		img: 'https://hashedin.com/wp-content/uploads/2022/11/hashedin-logo.png',
		role: 'Software Engineer',
		duration: 'Jan 2022 - Aug 22',
		description: 'Worked as a Backend Developer',
		skills: ['.Net Core', 'API', 'SQL Server', 'Entity Framework', 'Moq'],
	},
	{
		Id: 3,
		company: 'Wipro Limited',
		img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
		role: 'Project Engineer',
		duration: 'Jul 2019 - Jan 22',
		description: 'Worked as a Backend Developer',
		skills: [
			'.Net Core',
			'MVC',
			'SQL Server',
			'Entity Framework',
			'Kendo UI',
			'Azure',
		],
	},
];

export const education: Education[] = [
	{
		school: 'Thiagarajar College Of Engineering',
		degree: 'B.Tech Information Technology',
		duration: 'Jun 2015 - May 2019',
		grade: '8.5 CGPA',
		image:
      'https://upload.wikimedia.org/wikipedia/en/3/32/Thiagarajar_College_of_Engineering_logo.png',
	},
	{
		school: 'C.E.O.A Matriculation Higher Secondary School',
		degree: 'Class XII',
		duration: 'Jun 2014 - May 2015',
		grade: '95%',
		image: '/images/school.png',
	},
];

export const project: Project[] = [
	{
		Id: 1,
		title: 'Shopify ',
		description: 'Ecommerce APpllication for a client in US',
		skills: ['React', 'Redux', 'Typescript', '.Net Core', 'API', 'SQL Server'],
	},
	{
		Id: 2,
		title: 'Quiz App',
		description: 'A simple Quiz App',
		skills: ['React', 'Typescript', 'Redux', 'Material UI', 'Netlify'],
	},
	{
		Id: 3,
		title: 'Portfolio App',
		description: 'A simple Portfolio App',
		skills: ['React', 'Typescript', 'Netlify'],
	},
	{
		Id: 4,
		title: 'ToDo App',
		description: 'A simple ToDo App',
		skills: ['React', 'Typescript', 'Redux', 'Bootstrap', 'Netlify'],
	},
];

export const certificateList: Certification[] = [
	{
		title: 'Microsoft Certified: Azure Fundamentals AZ-200',
		providedBy: 'Microsoft',
	},
];

export const navOptions: NavOption[] = [
	{
		name: 'About',
		path: '#about',
	},
	{
		name: 'Skills',
		path: '#skills',
	},
	{
		name: 'Experience',
		path: '#experience',
	},
	{
		name: 'projects',
		path: '#project',
	},
	{
		name: 'Education',
		path: '#education',
	},
];
