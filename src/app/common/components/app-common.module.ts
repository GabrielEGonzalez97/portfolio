import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { ExperienceBannerComponent } from './experience-banner/experience-banner.component';
import { ExperienceDetailModalComponent } from './experience-detail-modal/experience-detail-modal.component';
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
        ExperienceDetailModalComponent,
        PaginationComponent,
        SectionComponent,
        SectionTitleComponent,
        SocialMediaComponent,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule
    ],
    exports: [
        ButtonComponent,
        CardComponent,
        CardsContainerComponent,
        ExperienceBannerComponent,
        ExperienceDetailModalComponent,
        PaginationComponent,
        SectionComponent,
        SectionTitleComponent,
        SocialMediaComponent,
    ],
})
export class AppCommonModule {}
