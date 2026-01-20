import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDetailModalComponent } from '@common/components/experience-detail-modal/experience-detail-modal.component';
import { IExperienceInfo, IPublicProject } from '@common/interfaces';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
    @Input() public project: IPublicProject | undefined;

    constructor(private dialog: MatDialog) {}

    public openProjectModal(): void {
        const isMobile: boolean = window.innerWidth <= 768;

        if (!this.project) {
            return;
        }

        const experienceData: IExperienceInfo = {
            company: this.project.company || {
                name: 'Freelance',
                logoPath: 'assets/icons/freelancer-icon.svg',
                color: '#aaa',
            },
            role: this.project.role,
            date: this.project.duration,
            description: this.project.shortDescription,
            descriptionBullets: [],
            projects: [this.project],
        };

        this.dialog.open(ExperienceDetailModalComponent, {
            data: experienceData,
            width: isMobile ? '100%' : '70%',
            maxWidth: '100vw',
            autoFocus: false,
        });
    }
}
