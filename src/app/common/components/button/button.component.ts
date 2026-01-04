import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
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
