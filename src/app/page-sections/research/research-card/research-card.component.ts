import { Component, Input } from '@angular/core';
import { IPublication } from '@common/interfaces';

@Component({
    selector: 'app-research-card',
    templateUrl: './research-card.component.html',
    styleUrls: ['./research-card.component.scss'],
})
export class ResearchCardComponent {
    @Input() public publication: IPublication | undefined;

    public openLinkNewTab(link: string): void {
        window.open(link, '_blank');
    }
}
