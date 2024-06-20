import { Component } from '@angular/core';
import { EDUCATION_INFO_ELEMENTS } from './constants';
import { IEducationInfo } from './interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  public educationInfoElements: IEducationInfo[] = EDUCATION_INFO_ELEMENTS;

  constructor() {}
}
