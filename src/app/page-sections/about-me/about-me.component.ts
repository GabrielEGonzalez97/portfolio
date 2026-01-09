import { Component } from '@angular/core';
import { PORTFOLIO_AUTHOR_NAME } from '@common/constants';
import { ABOUT_ME_TEXT } from './constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public aboutMeText: string = ABOUT_ME_TEXT;
  public portfolioAuthorName: string = PORTFOLIO_AUTHOR_NAME;

  constructor() {}

  public downloadResume(): void {
    const pdfUrl: string = 'assets/resume.pdf';

    const link: HTMLAnchorElement = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${this.portfolioAuthorName.replace(/ /g, '_')}_Resume.pdf`;
    link.click();
  }
}
