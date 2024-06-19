import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerHeight: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public onHeaderHeightChange(height: number): void {
    this.headerHeight = height;
    this.changeDetectorRef.detectChanges();
  }
}
