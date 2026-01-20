import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-actions',
    templateUrl: './project-actions.component.html',
    styleUrls: ['./project-actions.component.scss'],
})
export class ProjectActionsComponent {
    @Input() public githubRepoLink?: string;
    @Input() public websiteLink?: string;
}
