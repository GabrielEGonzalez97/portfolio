import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { marked } from 'marked';
import { IExperienceInfo } from '../experiences/interfaces';

@Component({
  selector: 'app-experience-detail-modal',
  templateUrl: './experience-detail-modal.component.html',
  styleUrls: ['./experience-detail-modal.component.scss'],
})
export class ExperienceDetailModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IExperienceInfo,
    private dialogRef: MatDialogRef<ExperienceDetailModalComponent>
  ) {}

  public closeModal(): void {
    this.dialogRef.close();
  }

  public projectDescriptionAsHtml(projectDescription: string) {
    return marked(projectDescription);
  }
}
