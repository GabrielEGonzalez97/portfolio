import { AfterViewInit, Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements AfterViewInit {
  public isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.getIsDarkTheme();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      const themeElement: Element | null = document.querySelector('.theme');
      if (themeElement) {
        themeElement.classList.remove('no-transition');
      }
    }, 0);
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
