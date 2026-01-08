import { Component } from '@angular/core';
import { AUTHOR_NAME } from '@common/constants';

@Component({
  selector: 'app-reach-out-to-me',
  templateUrl: './reach-out-to-me.component.html',
  styleUrls: ['./reach-out-to-me.component.scss'],
})
export class ReachOutToMeComponent {
  public authorName: string = AUTHOR_NAME;
}
