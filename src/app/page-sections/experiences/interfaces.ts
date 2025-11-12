import { ISkill } from '../education-and-courses/courses/interfaces';

export interface ICompany {
  name: string;
  logoPath: string;
  color: string;
}

export interface IExperienceDetail {
  role: string;
  duration: string;
  isPrivateProject: boolean;
  projectName?: string;
  projectDescription?: string;
  contribution: string;
  skills: ISkill[];
}

export interface IExperienceInfo {
  company: ICompany;
  role: string;
  date: string;
  description: string;
  descriptionBullets: string[];
  experienceDetails: IExperienceDetail[];
}
