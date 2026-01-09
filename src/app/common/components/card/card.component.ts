import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public fotterButtonText?: string = '';
  @Input() public fotterButtonLink?: string = '';

  @Output() footerButtonClicked = new EventEmitter<void>();

  constructor() {}

  public onFooterButtonClick(): void {
    this.footerButtonClicked.emit();
  }
}
