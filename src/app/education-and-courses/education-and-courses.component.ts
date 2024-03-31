import { Component, OnInit } from '@angular/core';
import { COURSE_INFO_ELEMENTS, EDUCATION_INFO_ELEMENTS } from './constants';
import {
  ICourseInfo,
  IEducationInfo,
  IIssuingCompany,
  ISkill,
} from './interfaces';

@Component({
  selector: 'app-education-and-courses',
  templateUrl: './education-and-courses.component.html',
  styleUrls: ['./education-and-courses.component.scss'],
})
export class EducationAndCoursesComponent implements OnInit {
  public educationInfoElements: IEducationInfo[] = EDUCATION_INFO_ELEMENTS;

  public courseInfoElements: ICourseInfo[] = COURSE_INFO_ELEMENTS;
  public courseInfoElementsToShow: ICourseInfo[] = [];

  public years: string[] = [];
  public skills: ISkill[] = [];
  public issuingCompanies: IIssuingCompany[] = [];

  private selectedYears: string[] = [];
  private selectedSkills: string[] = [];
  private selectedIssuingCompanies: string[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.courseInfoElements = this.courseInfoElements.sort(
      (a: ICourseInfo, b: ICourseInfo) => {
        const numericDateA: number = this.convertExpeditionDateToNumeric(
          a.expeditionDate
        );
        const numericDateB: number = this.convertExpeditionDateToNumeric(
          b.expeditionDate
        );

        return numericDateB - numericDateA;
      }
    );
    this.courseInfoElementsToShow = this.courseInfoElements.slice(0, 2);

    this.completeFilters(this.courseInfoElements);
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

  private completeFilters(courseInfoElements: ICourseInfo[]): void {
    const uniqueYearsMap: Map<string, string> = new Map<string, string>();
    const uniqueSkillsMap: Map<string, ISkill> = new Map<string, ISkill>();
    const uniqueIssuingCompaniesMap: Map<string, IIssuingCompany> = new Map<
      string,
      IIssuingCompany
    >();

    courseInfoElements.forEach((course: ICourseInfo) => {
      const [_, expeditionDateYear] = course.expeditionDate.split(' ');
      uniqueYearsMap.set(expeditionDateYear, expeditionDateYear);

      course.skills.forEach((skill: ISkill) => {
        uniqueSkillsMap.set(skill.skillName, skill);
      });

      uniqueIssuingCompaniesMap.set(
        course.issuingCompany.companyName,
        course.issuingCompany
      );
    });

    const uniqueYearsArray: string[] = Array.from(uniqueYearsMap.values());
    uniqueYearsArray.sort((a: string, b: string) => parseInt(b) - parseInt(a));
    this.years = uniqueYearsArray;

    const uniqueSkillsArray: ISkill[] = Array.from(uniqueSkillsMap.values());
    uniqueSkillsArray.sort((a: ISkill, b: ISkill) => {
      if (a.skillName < b.skillName) {
        return -1;
      } else if (a.skillName > b.skillName) {
        return 1;
      }
      return 0;
    });

    this.skills = uniqueSkillsArray;

    const uniqueIssuingCompaniesArray: IIssuingCompany[] = Array.from(
      uniqueIssuingCompaniesMap.values()
    );
    uniqueIssuingCompaniesArray.sort(
      (a: IIssuingCompany, b: IIssuingCompany) => {
        if (a.companyName < b.companyName) {
          return -1;
        } else if (a.companyName > b.companyName) {
          return 1;
        }
        return 0;
      }
    );

    this.issuingCompanies = uniqueIssuingCompaniesArray;
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

  private onFilterChange(): void {
    this.courseInfoElements = COURSE_INFO_ELEMENTS.filter(
      (courseInfo: ICourseInfo) => {
        let filterYear: boolean = true;
        let filterSkill: boolean = true;
        let filterCompany: boolean = true;

        if (this.selectedYears.length > 0) {
          const [_, expeditionDateYear] = courseInfo.expeditionDate.split(' ');
          filterYear = this.selectedYears.includes(expeditionDateYear);
        }

        if (this.selectedSkills.length > 0) {
          filterSkill = courseInfo.skills.some((skill: ISkill) =>
            this.selectedSkills.includes(skill.skillName)
          );
        }

        if (this.selectedIssuingCompanies.length > 0) {
          filterCompany = this.selectedIssuingCompanies.includes(
            courseInfo.issuingCompany.companyName
          );
        }

        return filterYear && filterSkill && filterCompany;
      }
    );

    this.courseInfoElementsToShow = this.courseInfoElements.slice(0, 2);
  }

  public onFilterByYear(yearsToFilter: string[]): void {
    this.selectedYears = yearsToFilter;
    this.onFilterChange();
  }

  public onFilterBySkill(skillsToFilter: string[]): void {
    this.selectedSkills = skillsToFilter;
    this.onFilterChange();
  }

  public onFilterByIssuingCompany(issuingCompaniesToFilter: string[]): void {
    this.selectedIssuingCompanies = issuingCompaniesToFilter;
    this.onFilterChange();
  }
}
