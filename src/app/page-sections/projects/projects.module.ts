import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCommonModule } from '@common/components/app-common.module';

import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectCardComponent
    ],
    imports: [
        AppCommonModule,
        CommonModule
    ],
    exports: [
        ProjectsComponent
    ]
})
export class ProjectsModule {}
