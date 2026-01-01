import { ISkill } from "@common/interfaces";

export interface IIssuingCompany {
  companyName: string;
  companyLogoPath: string;
}

export interface ICourseInfo {
  courseName: string;
  issuingCompany: IIssuingCompany;
  expeditionDate: string;
  durationHours: string;
  credentialUrl: string;
  skills: ISkill[];
}
