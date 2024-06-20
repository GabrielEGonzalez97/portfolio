import { Component } from '@angular/core';
import { ABOUT_ME_TEXT } from './constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public aboutMeText: string = ABOUT_ME_TEXT;

  constructor() {}
}
