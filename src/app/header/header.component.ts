import { Component } from '@angular/core';
import { MENU_OPTIONS } from './constants';
import { IMenuOption } from './interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuOptions: IMenuOption[] = MENU_OPTIONS;
}
