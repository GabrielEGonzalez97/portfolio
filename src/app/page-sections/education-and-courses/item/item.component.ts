import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() public logoPath: string = '';
  @Input() public logoDescription: string = '';
  @Input() public itemTitle: string = '';
  @Input() public itemSubtitle: string = '';
  @Input() public duration: string = '';

  constructor() {}
}
