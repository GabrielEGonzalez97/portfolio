import { Component, Input } from '@angular/core';
import { IPublicProject } from '@common/interfaces';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
    @Input() public project: IPublicProject | undefined;
}
