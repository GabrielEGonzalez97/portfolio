import { ICompany, IExperienceInfo } from './interfaces';

export const IBM_COMPANY: ICompany = {
  name: 'IBM',
  logoPath: 'assets/icons/ibm-icon.svg',
  color: '#3E85C2',
};

export const EXPERIENCES: IExperienceInfo[] = [
  {
    company: IBM_COMPANY,
    role: 'Software Engineer',
    date: 'November 2021 - Present',
    description:
      'I mainly worked on tasks related to the frontend, being the leader in the tasks related to that area and the person in charge of carrying out those tasks. I also developed some important features on the backend side. I have experience working with remote teams from multiple parts of the world.',
    descriptionBullets: [],
  },
];
