import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public fotterButtonText: string = '';
  @Input() public fotterButtonLink: string = '';

  constructor() {}
}
