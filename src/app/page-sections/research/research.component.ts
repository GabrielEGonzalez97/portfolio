import { Component } from '@angular/core';
import { IPublication } from '@common/interfaces';
import { PUBLICATIONS } from './constants';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent {
  public publications: IPublication[] = PUBLICATIONS;

  constructor() {}


}
