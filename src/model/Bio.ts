export type Bio = {
	name: string;
	roles: string[];
	objective: string;
	linkedin: string;
	resume: string;
	mobile: string;
	email: string;
};

export type SkillDetail = {
	category: string;
	skills: Skill[];
};

export type Skill = {
	name: string;
	image: string;
};

export type Experience = {
	Id: number;
	company: string;
	img: string;
	role: string;
	duration: string;
	description: string;
	skills: string[];
};

export type Education = {
	school: string;
	degree: string;
	duration: string;
	grade: string;
	image: string;
};

export type Project = {

	Id: number;
	title: string;
	description: string;
	skills: string[];
	image?: string;
};

export type Certification = {
	title: string;
	providedBy: string;
};

export type NavOption = {
	name: string;
	path: string;
};
