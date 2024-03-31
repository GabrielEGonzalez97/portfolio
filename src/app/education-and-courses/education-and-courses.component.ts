import { Component, OnInit } from '@angular/core';
import {
  ANGULAR_SKILL,
  CSS_SKILL,
  DATACAMP_COMPANY,
  DOCKER_SKILL,
  EF_COMPANY,
  ENGLISH_SKILL,
  HTML_SKILL,
  IBM_COMPANY,
  JAVASCRIPT_SKILL,
  JAVA_SKILL,
  MINISTERIO_PRODUCCION_ARGENTINO_COMPANY,
  PYTHON_SKILL,
  R_SKILL,
  SQL_SKILL,
  SVELTE_SKILL,
  TSOFT_COMPANY,
  TYPESCRIPT_SKILL,
  UDEMY_COMPANY,
  VUE_JS_SKILL,
} from './constants';
import { ICourseInfo, IEducationInfo } from './interfaces';

@Component({
  selector: 'app-education-and-courses',
  templateUrl: './education-and-courses.component.html',
  styleUrls: ['./education-and-courses.component.scss'],
})
export class EducationAndCoursesComponent implements OnInit {
  public educationInfoElements: IEducationInfo[] = [
    {
      schoolName:
        'Universidad Nacional del Centro de la Provincia de Buenos Aires',
      schoolLogoPath: 'assets/images/UNICEN_Logo.png',
      title: 'Software Engineer',
      duration: 'March 2017 - October 2023',
      description: 'Five-year bachelor degree.',
      descriptionBullets: [
        'Final work titled: Open Data Integrated into the Management of Waste from Electrical and Electronic Equipment.',
        'Intern of the Scientific Vocation Stimulus Scholarship Program (EVC - CIN)',
        'Member of the research team for the project "Open Data for the Valorization of WEEE"',
      ],
    },
  ];

  public courseInfoElements: ICourseInfo[] = [
    {
      courseName: 'EFSET English Certificate 66/100 (C1 Advanced)',
      issuingCompany: EF_COMPANY,
      expeditionDate: 'January 2024',
      durationHours: '',
      credentialUrl: 'https://www.efset.org/cert/x9312N',
      skills: [ENGLISH_SKILL],
    },
    {
      courseName: 'Easy English Pronunciation - for Spanish speakers',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'December 2023',
      durationHours: '5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-5662b1b1-03e3-49f2-b608-c260d320dc39/',
      skills: [ENGLISH_SKILL],
    },
    {
      courseName: 'Svelte.js - The Complete Guide (incl. Sapper.js)',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'December 2023',
      durationHours: '12.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-ebd8d625-8262-4f9b-ad9c-fbf5334ad2cb/',
      skills: [SVELTE_SKILL, HTML_SKILL, CSS_SKILL],
    },
    {
      courseName: 'TypeScript: Your complete guide and handbook',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'October 2023',
      durationHours: '9',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-1789e4c6-0b1d-410a-b694-4f5368f5e34d/',
      skills: [TYPESCRIPT_SKILL],
    },
    {
      courseName: 'SOLID Principles and Clean Code',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'February 2023',
      durationHours: '6.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-0a34cf12-479d-457e-a65b-5b19cbcdefc0/',
      skills: [],
    },
    {
      courseName: 'Angular - Forms: Intensive Course (Angular 8+)',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'January 2023',
      durationHours: '2.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-630b3554-0d74-44bf-8f3b-d0021ff3defc/',
      skills: [ANGULAR_SKILL],
    },
    {
      courseName: 'Angular Components - PRO Level (Angular 2/4/5/6/7+)',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'January 2023',
      durationHours: '3',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-a3fbbe28-f33b-479d-a8ca-8b6b8d498a43/',
      skills: [ANGULAR_SKILL],
    },
    {
      courseName: 'RxJS PRO level',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'January 2023',
      durationHours: '4',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-aa917e46-1d49-4504-bf59-bb3c276df626/',
      skills: [ANGULAR_SKILL],
    },
    {
      courseName: 'Data Analysis with Pandas and Python',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'December 2022',
      durationHours: '1.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-906847cf-c4cc-43f6-8a74-98ca46b75241/',
      skills: [PYTHON_SKILL],
    },
    {
      courseName: 'Angular: Unit Testing with Jasmine and Karma',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'September 2022',
      durationHours: '6.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-89a463d1-1394-4f8d-a16f-e7e09cda5473/',
      skills: [ANGULAR_SKILL],
    },
    {
      courseName: 'Vue JS 2',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'July 2022',
      durationHours: '6.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-1d5b4ec9-6624-40da-9601-bf14abc9f3db/',
      skills: [VUE_JS_SKILL],
    },
    {
      courseName: 'Docker Essentials: A Developer Introduction',
      issuingCompany: IBM_COMPANY,
      expeditionDate: 'July 2022',
      durationHours: '',
      credentialUrl:
        'https://www.credly.com/badges/ab744ae7-4261-4a78-8b6f-25f6277fc6ef',
      skills: [DOCKER_SKILL],
    },
    {
      courseName: 'Enterprise Design Thinking Practitioner',
      issuingCompany: IBM_COMPANY,
      expeditionDate: 'July 2022',
      durationHours: '',
      credentialUrl:
        'https://www.credly.com/badges/bc36ffd3-1df3-4645-817b-db9918df8473',
      skills: [],
    },
    {
      courseName: 'Python for Data Science',
      issuingCompany: IBM_COMPANY,
      expeditionDate: 'April 2022',
      durationHours: '',
      credentialUrl:
        'https://www.credly.com/badges/18b73a15-4254-41ea-aa47-7b5e88d5b5ab?source=linked_in_profile',
      skills: [PYTHON_SKILL],
    },
    {
      courseName: "ES6 Javascript: The Complete Developer's Guide",
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'February 2022',
      durationHours: '6.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-7d338899-ef98-40ef-8b2e-fed3037ce093/',
      skills: [JAVASCRIPT_SKILL],
    },
    {
      courseName: 'Angular Essentials (Angular 2+ with TypeScript)',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'December 2021',
      durationHours: '6.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-6b041a2f-86b1-40bd-aa10-4291ebea2cdb/',
      skills: [ANGULAR_SKILL, TYPESCRIPT_SKILL, HTML_SKILL, CSS_SKILL],
    },
    {
      courseName: 'Business English: Easy English for Meetings',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'December 2021',
      durationHours: '2',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-245ba8ff-44b0-47aa-aee6-589a780923f7/',
      skills: [ENGLISH_SKILL],
    },
    {
      courseName: 'English for IT Professionals',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'December 2021',
      durationHours: '3.5',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-20cfb968-6b15-448b-88fc-90f92f348085/',
      skills: [ENGLISH_SKILL],
    },
    {
      courseName: 'Angular Fundamentals',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'July 2021',
      durationHours: '4',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-473c94ad-d9b1-4ed5-90df-7d6d66e554de/',
      skills: [ANGULAR_SKILL, TYPESCRIPT_SKILL, HTML_SKILL, CSS_SKILL],
    },
    {
      courseName: 'SQL Fundamentals Track',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'March 2021',
      durationHours: '21',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/49de65dea40f1f2a39f2aba309ac5003478401c2',
      skills: [SQL_SKILL],
    },
    {
      courseName: 'Introduction to QA and Test Automation',
      issuingCompany: TSOFT_COMPANY,
      expeditionDate: 'February 2021',
      durationHours: '8',
      credentialUrl:
        'https://drive.google.com/file/d/1dqoulTmUFCvFp7aOyE-PTgLT8ME0LXE1/view?usp=sharing',
      skills: [],
    },
    {
      courseName: 'Data Analyst with R',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'January 2021',
      durationHours: '77',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/5684cf5e833e080ae49a1ad2353ae14d91e67a21',
      skills: [R_SKILL],
    },
    {
      courseName: 'Data Manipulation with R',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'January 2021',
      durationHours: '20',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/49b10a290d9b912015891e75cdc2d054133f3bd3',
      skills: [R_SKILL],
    },
    {
      courseName: 'HTML5 from Scratch 2020 Edition',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'January 2021',
      durationHours: '6',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-196ede52-821c-4943-a333-4349eb1fc00a/',
      skills: [HTML_SKILL],
    },
    {
      courseName: 'Python 3, from 0 to Master',
      issuingCompany: UDEMY_COMPANY,
      expeditionDate: 'January 2021',
      durationHours: '13',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-6b9607df-7b9f-438d-be64-edceebf9a24c/',
      skills: [PYTHON_SKILL],
    },
    {
      courseName: 'Data Scientist with R',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'October 2020',
      durationHours: '76',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/a1b7634bc07f956e7d6ba9726dd8e21ac15af859',
      skills: [R_SKILL],
    },
    {
      courseName: 'Machine Learning Fundamentals in R',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'October 2020',
      durationHours: '16',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/379b8ce7a5db4438e4c950ca273bcd3705d06c74',
      skills: [R_SKILL],
    },
    {
      courseName: 'Data Visualization with R',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'September 2020',
      durationHours: '12',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/fea16844e57f8164924f67c761b9af0d53bc6bc2',
      skills: [R_SKILL],
    },
    {
      courseName: 'Importing & Cleaning Data with R',
      issuingCompany: DATACAMP_COMPANY,
      expeditionDate: 'September 2020',
      durationHours: '14',
      credentialUrl:
        'https://www.datacamp.com/statement-of-accomplishment/track/a712baa62cd7d6d06c59bed79d86d5310bda46a5',
      skills: [R_SKILL],
    },
    {
      courseName: 'Knowledge Analyst - Programmer Path 2017',
      issuingCompany: MINISTERIO_PRODUCCION_ARGENTINO_COMPANY,
      expeditionDate: 'June 2018',
      durationHours: '596',
      credentialUrl:
        'https://drive.google.com/file/d/1U_r9L8-YYCr-gHoKA-5zaRVCPgtTI_tp/view?usp=sharing',
      skills: [JAVA_SKILL, SQL_SKILL],
    },
  ];

  public courseInfoElementsToShow: ICourseInfo[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.courseInfoElements = this.courseInfoElements.sort((a, b) => {
      const numericDateA: number = this.convertExpeditionDateToNumeric(
        a.expeditionDate
      );
      const numericDateB: number = this.convertExpeditionDateToNumeric(
        b.expeditionDate
      );

      return numericDateB - numericDateA;
    });
    this.courseInfoElementsToShow = this.courseInfoElements.slice(0, 2);
  }

  private convertExpeditionDateToNumeric(expeditionDate: string): number {
    const [month, year] = expeditionDate.split(' ');
    const monthsMap: { [month: string]: number } = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    return parseInt(year, 10) * 100 + monthsMap[month];
  }

  public addCourseElementsToShow(): void {
    const startIndex: number = this.courseInfoElementsToShow.length;
    let endIndex: number = startIndex + 2;
    if (endIndex > this.courseInfoElements.length) {
      endIndex = this.courseInfoElements.length;
    }
    this.courseInfoElementsToShow.push(
      ...this.courseInfoElements.slice(startIndex, endIndex)
    );
  }
}
