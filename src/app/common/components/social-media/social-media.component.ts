import { Component } from '@angular/core';
import { SOCIAL_LINKS } from './constants';
import { ISocialMedia } from './interfaces';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  public socialLinks: ISocialMedia[] = SOCIAL_LINKS;

  constructor() {}
}
