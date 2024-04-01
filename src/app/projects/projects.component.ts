import { Component } from '@angular/core';
import { PROJECTS } from './constants';
import { IProject } from './interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: IProject[] = PROJECTS;

  constructor() {}
}
