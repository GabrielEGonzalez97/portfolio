import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MENU_OPTIONS } from './constants';
import { IMenuOption } from './interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerElement') headerElement!: ElementRef;

  @Output() headerHeightChange = new EventEmitter<number>();

  public menuOptions: IMenuOption[] = MENU_OPTIONS;

  public headerHeight: number = 0;

  public isMobileMenuOpen: boolean = false;

  constructor() {}

  public ngAfterViewInit(): void {
    this.headerHeight = this.headerElement.nativeElement.offsetHeight + 16;
    this.headerHeightChange.emit(this.headerHeight);
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public scrollToElement(id: string): void {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      const elementPosition: number =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition: number = elementPosition - this.headerHeight + 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu after navigation
      this.isMobileMenuOpen = false;
    }
  }
}
