import { ICompany, IExperienceInfo } from './interfaces';

export const IBM_COMPANY: ICompany = {
  name: 'IBM',
  logoPath: 'assets/icons/ibm-icon.svg',
  color: '#3E85C2',
};

export const UNICEN_COMPANY: ICompany = {
  name: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
  logoPath: 'assets/images/UNICEN_Logo.png',
  color: '#043E6A',
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
  {
    company: UNICEN_COMPANY,
    role: 'Assistant Professor',
    date: 'April 2021 - September 2021',
    description:
      "I assisted the principal professor of the subject, being in charge of answering the student's questions, teaching them how to carry out practical exercises to apply the knowledge learned in theory, and correcting the students' practical work.",
    descriptionBullets: [
      'Subject: Software Development Methodologies. This subject corresponds to the 3rd year of the Software Engineer degree.',
      'Subject: Introduction to Software Development Methodologies. This subject corresponds to the University Technician degree in Computer Application Development.',
    ],
  },
];
