export interface IEducationInfo {
  schoolName: string;
  schoolLogoPath: string;
  title: string;
  duration: string;
  description: string;
  descriptionBullets: string[];
}

export interface IIssuingCompany {
  companyName: string;
  companyLogoPath: string;
}

export interface ISkill {
  skillName: string;
  skillLogoPath: string;
}

export interface ICourseInfo {
  courseName: string;
  issuingCompany: IIssuingCompany;
  expeditionDate: string;
  durationHours: string;
  credentialUrl: string;
  skills: ISkill[];
}
