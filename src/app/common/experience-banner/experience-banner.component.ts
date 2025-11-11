import { Component, Input } from '@angular/core';
import { IExperienceInfo } from '../../page-sections/experiences/interfaces';

@Component({
  selector: 'app-experience-banner',
  templateUrl: './experience-banner.component.html',
  styleUrls: ['./experience-banner.component.scss'],
})
export class ExperienceBannerComponent {
  @Input() public experience!: IExperienceInfo;
}
