import {
  ANGULAR_SKILL,
  CSS_SKILL,
  HTML_SKILL,
  PYTHON_SKILL,
  TYPESCRIPT_SKILL,
} from '../education-and-courses/courses/constants';
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
    experienceDetails: [
      {
        role: 'Software Engineer',
        duration: 'Chief Analytics Office | Nov 2021 - Dec 2022',
        isPrivateProject: true,
        contribution:
          "I led and developed the frontend side of the project using the Angular framework, which allowed me to take on a significant role within the team and be involved in all aspects of the UI. I worked closely with the backend developers and the team's data scientists to incorporate all the necessary requirements for showcasing specific functionalities in the UI.\n\n When I joined these projects, they had already been in existence for a few years. One of the actions I took was restructuring the HTML code to use semantic HTML. This code restructuring not only served to apply better programming techniques in the frontend, but also led to an improvement in the UI design by, for example, enhancing the way text was displayed on the screen.\n\n In addition, I implemented essential features on the backend side, building REST API services with Flask using Python and a DB2 database. Additionally, I was also responsible for carrying out a paradigm shift that the product stakeholders were looking for by stopping offering the information through a web page and starting to send that information to users in personalized insights by email.",
        skills: [
          ANGULAR_SKILL,
          CSS_SKILL,
          HTML_SKILL,
          TYPESCRIPT_SKILL,
          PYTHON_SKILL,
        ],
      },
    ],
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
    experienceDetails: [],
  },
];
