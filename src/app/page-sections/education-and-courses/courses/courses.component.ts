import { Component, OnInit } from '@angular/core';
import { COURSE_INFO_ELEMENTS } from './constants';
import { ICourseInfo, IIssuingCompany, ISkill } from './interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  private allCourseInfoElements: ICourseInfo[] = COURSE_INFO_ELEMENTS;
  public courseInfoElements: ICourseInfo[] = [];
  public currentPageCourses: ICourseInfo[] = [];

  public years: string[] = [];
  public skills: ISkill[] = [];
  public issuingCompanies: IIssuingCompany[] = [];

  public selectedYears: string[] = [];
  public selectedSkills: string[] = [];
  public selectedIssuingCompanies: string[] = [];

  public numberCoursesPerPage: number = 2;
  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor() {}

  public ngOnInit(): void {
    this.allCourseInfoElements = this.allCourseInfoElements.sort(
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

    this.courseInfoElements = [...this.allCourseInfoElements];
    this.calculateTotalPages();
    this.loadCurrentPageCourses();
    this.completeFilters(this.courseInfoElements);
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(
      this.courseInfoElements.length / this.numberCoursesPerPage
    );
  }

  private loadCurrentPageCourses(): void {
    const startIndex: number =
      (this.currentPage - 1) * this.numberCoursesPerPage;
    const endIndex: number = startIndex + this.numberCoursesPerPage;
    this.currentPageCourses = this.courseInfoElements.slice(
      startIndex,
      endIndex
    );
  }

  public changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return; // Prevent invalid page change
    this.currentPage = page;
    this.loadCurrentPageCourses();
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

  private onFilterChange(): void {
    this.courseInfoElements = this.allCourseInfoElements.filter(
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

    this.calculateTotalPages();
    this.currentPage = 1;
    this.loadCurrentPageCourses();
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

  public trackByCourseName(index: number, course: ICourseInfo): string {
    return course.courseName;
  }

  public hasActiveFilters(): boolean {
    return (
      this.selectedYears.length > 0 ||
      this.selectedSkills.length > 0 ||
      this.selectedIssuingCompanies.length > 0
    );
  }

  public removeFilter(type: 'year' | 'skill' | 'company', value: string): void {
    switch (type) {
      case 'year':
        this.selectedYears = this.selectedYears.filter((y) => y !== value);
        break;
      case 'skill':
        this.selectedSkills = this.selectedSkills.filter((s) => s !== value);
        break;
      case 'company':
        this.selectedIssuingCompanies = this.selectedIssuingCompanies.filter(
          (c) => c !== value
        );
        break;
    }
    this.onFilterChange();
  }

  public clearFilters(): void {
    this.selectedYears = [];
    this.selectedSkills = [];
    this.selectedIssuingCompanies = [];
    this.courseInfoElements = [...this.allCourseInfoElements];
    this.calculateTotalPages();
    this.currentPage = 1;
    this.loadCurrentPageCourses();
  }
}
