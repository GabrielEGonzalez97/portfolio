import { Component } from '@angular/core';
import { EF_COMPANY, ENGLISH_SKILL } from './constants';
import { ICourseInfo, IEducationInfo } from './interfaces';

@Component({
  selector: 'app-education-and-courses',
  templateUrl: './education-and-courses.component.html',
  styleUrls: ['./education-and-courses.component.scss'],
})
export class EducationAndCoursesComponent {
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
  ];
}
