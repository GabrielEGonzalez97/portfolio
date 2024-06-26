import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() sectionId: string = '';
  @Input() sectionTitle: string = '';
  @Input() includeCardsContainer: boolean = false;

  constructor() {}
}
