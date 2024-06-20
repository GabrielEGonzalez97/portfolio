export interface ISchool {
  name: string;
  logoPath: string;
}

export interface IEducationInfo {
  school: ISchool;
  title: string;
  duration: string;
  description: string;
  descriptionBullets: string[];
}
