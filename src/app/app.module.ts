import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppCommonModule } from './common/components/app-common.module';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsModule } from './page-sections/projects/projects.module';
import { ResearchModule } from './page-sections/research/research.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ThemeSwitcherComponent } from './header/theme-switcher/theme-switcher.component';
import { AboutMeComponent } from './page-sections/about-me/about-me.component';
import { CoursesComponent } from './page-sections/education-and-courses/courses/courses.component';
import { EducationAndCoursesComponent } from './page-sections/education-and-courses/education-and-courses.component';
import { EducationComponent } from './page-sections/education-and-courses/education/education.component';
import { ItemComponent } from './page-sections/education-and-courses/item/item.component';
import { ExperienceDetailModalComponent } from './page-sections/experience-detail-modal/experience-detail-modal.component';
import { ExperiencesComponent } from './page-sections/experiences/experiences.component';
import { LocationIconComponent } from './page-sections/reach-out-to-me/location-icon/location-icon.component';
import { ReachOutToMeComponent } from './page-sections/reach-out-to-me/reach-out-to-me.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    CoursesComponent,
    EducationAndCoursesComponent,
    EducationComponent,
    ExperienceDetailModalComponent,
    ExperiencesComponent,
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    LocationIconComponent,
    ReachOutToMeComponent,
    ThemeSwitcherComponent,
  ],
  imports: [
    AppCommonModule,
    AppRoutingModule,
    ProjectsModule,
    ResearchModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
