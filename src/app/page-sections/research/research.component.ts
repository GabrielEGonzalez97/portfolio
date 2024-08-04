import { Component } from '@angular/core';
import { PUBLICATIONS } from './constants';
import { IPublication } from './interfaces';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent {
  public publications: IPublication[] = PUBLICATIONS;

  constructor() {}

  public openLinkNewTab(link: string): void {
    window.open(link, '_blank');
  }
}
