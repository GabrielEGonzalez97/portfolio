import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent {
  @Input() buttonName: string = '';
  @Input() href: string = '';
  @Input() openLinkNewUrl: boolean = true;

  constructor() {}
}
