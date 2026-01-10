import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IExperienceInfo } from '@common/interfaces';
import { ExperienceDetailModalComponent } from '../experience-detail-modal/experience-detail-modal.component';
import { EXPERIENCES } from './constants';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  public experiences: IExperienceInfo[] = EXPERIENCES;

  constructor(private dialog: MatDialog) {}

  public openExperienceModal(experienceData: IExperienceInfo): void {
    const isMobile: boolean = window.innerWidth <= 768;

    this.dialog.open(ExperienceDetailModalComponent, {
      data: experienceData,
      width: isMobile ? '100%' : '70%',
      maxWidth: '100vw',
      autoFocus: false,
    });
  }
}
