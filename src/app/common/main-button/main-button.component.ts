import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent {
  @Input() buttonName: string = '';
  @Input() isPrimaryButton: boolean = true;
  @Input() href?: string = '';
  @Input() openLinkNewUrl?: boolean = true;

  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {}

  public onClick(_: MouseEvent): void {
    this.buttonClicked.emit();
  }
}
