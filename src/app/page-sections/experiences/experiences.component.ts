import { Component } from '@angular/core';
import { EXPERIENCES } from './constants';
import { IExperienceInfo } from './interfaces';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  public experiences: IExperienceInfo[] = EXPERIENCES;

  constructor() {}
}
