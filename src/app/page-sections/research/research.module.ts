import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCommonModule } from '@common/components/app-common.module';

import { ResearchCardComponent } from './research-card/research-card.component';
import { ResearchComponent } from './research.component';

@NgModule({
    declarations: [
        ResearchComponent,
        ResearchCardComponent
    ],
    imports: [
        AppCommonModule,
        CommonModule
    ],
    exports: [
        ResearchComponent
    ]
})
export class ResearchModule {}
