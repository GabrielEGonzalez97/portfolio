export interface ICompany {
  name: string;
  logoPath: string;
  color: string;
}

export interface ISkill {
  name: string;
  logoPath: string;
}

interface IProjectBase {
  contribution: string;
  role: string;
  duration: string;
  logoPath?: string;
  websiteLink?: string;
  skills: ISkill[];
}

interface IPublicProjectFields {
  isPrivateProject: false;
  name: string;
  shortDescription: string;
  extendedDescription: string;
  githubRepoLink: string;
}

interface IPrivateProjectFields {
  isPrivateProject: true;
  name?: string;
  shortDescription?: string;
  extendedDescription?: string;
  githubRepoLink?: string;
}

interface ICompanyProject {
  isFreelanceProject: false;
  company: ICompany;
}

interface IFreelanceProject {
  isFreelanceProject: true;
  company?: ICompany;
}

export type IProject =
  IProjectBase &
  (IPublicProjectFields | IPrivateProjectFields) &
  (IFreelanceProject | ICompanyProject);

export type IPublicProject =
  IProjectBase &
  IPublicProjectFields &
  (IFreelanceProject | ICompanyProject);

export interface IExperienceInfo {
  company: ICompany;
  role: string;
  date: string;
  description: string;
  descriptionBullets: string[];
  projects: IProject[];
}
