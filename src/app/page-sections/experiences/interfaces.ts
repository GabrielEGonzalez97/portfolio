export interface ICompany {
  name: string;
  logoPath: string;
  color: string;
}

export interface IExperienceInfo {
  company: ICompany;
  role: string;
  date: string;
  description: string;
  descriptionBullets: string[];
}
