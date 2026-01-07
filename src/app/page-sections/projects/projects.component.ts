import { Component } from '@angular/core';
import { IPublicProject } from '@common/interfaces';
import { PROJECTS } from './constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: IPublicProject[] = PROJECTS;

  constructor() {}
}
