import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { ExperienceBannerComponent } from './experience-banner/experience-banner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionComponent } from './section/section.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
    declarations: [
        ButtonComponent,
        CardComponent,
        CardsContainerComponent,
        ExperienceBannerComponent,
        PaginationComponent,
        SectionComponent,
        SectionTitleComponent,
        SocialMediaComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        ButtonComponent,
        CardComponent,
        CardsContainerComponent,
        ExperienceBannerComponent,
        PaginationComponent,
        SectionComponent,
        SectionTitleComponent,
        SocialMediaComponent,
    ],
})
export class AppCommonModule { }
