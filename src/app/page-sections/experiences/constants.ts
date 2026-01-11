import {
  AGENTIC_CODE_EXPLORER_PROJECT,
  AI_ATTRIBUTION_TOOLKIT_PROJECT,
  CLARITY_PROJECT,
  COLLABORATION_CANVAS_PROJECT,
  IBM_COMPANY,
  KOALA_PROJECT,
  PRIVATE_PROJECT_2023,
  PRIVATE_PROJECT_2024,
  UNICEN_COMPANY,
} from '@common/constants';
import { IExperienceInfo } from '@common/interfaces';


export const EXPERIENCES: IExperienceInfo[] = [
  {
    company: IBM_COMPANY,
    role: 'Software Engineer',
    date: 'November 2021 - December 2025',
    description:
      'I work as a software engineer in Human-Centered AI (HCAI) research, focusing on the interaction between humans and AI agents in areas such as collaborative AI, mutual theory of mind, and group ideation with AI tools. I lead frontend development tasks and am responsible for implementing key features in that area, while also contributing to backend functionalities.',
    descriptionBullets: [],
    projects: [
      AGENTIC_CODE_EXPLORER_PROJECT,
      AI_ATTRIBUTION_TOOLKIT_PROJECT,
      PRIVATE_PROJECT_2024,
      KOALA_PROJECT,
      COLLABORATION_CANVAS_PROJECT,
      PRIVATE_PROJECT_2023,
      CLARITY_PROJECT,
    ],
  },
  {
    company: UNICEN_COMPANY,
    role: 'Undergraduate Teaching Assistant',
    date: 'April 2021 - September 2021',
    description:
      "I assisted the principal professor of the subject, being in charge of answering the student's questions, teaching them how to carry out practical exercises to apply the knowledge learned in theory, and correcting the students' practical work.",
    descriptionBullets: [
      'Subject: Software Development Methodologies. This subject corresponds to the 3rd year of the Software Engineer degree.',
      'Subject: Introduction to Software Development Methodologies. This subject corresponds to the University Technician degree in Computer Application Development.',
    ],
    projects: [],
  },
];
