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
      'I work as a software engineer in Human-Centered AI (HCAI) research, focusing on the interaction between humans and AI agents in areas such as collaborative AI, mutual theory of mind, and group ideation with AI tools. I lead frontend development tasks and am responsible for implementing key features in that area, while also contributing to backend functionalities.',
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
