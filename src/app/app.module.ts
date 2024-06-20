import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainButtonComponent } from './common/main-button/main-button.component';
import { SectionTitleComponent } from './common/section-title/section-title.component';
import { SectionComponent } from './common/section/section.component';
import { HeaderComponent } from './header/header.component';
import { EducationAndCoursesComponent } from './page-sections/education-and-courses/education-and-courses.component';
import { ExperiencesComponent } from './page-sections/experiences/experiences.component';
import { ProjectsComponent } from './page-sections/projects/projects.component';
import { ResearchComponent } from './page-sections/research/research.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationAndCoursesComponent,
    ExperiencesComponent,
    HeaderComponent,
    MainButtonComponent,
    ProjectsComponent,
    SocialMediaComponent,
    ResearchComponent,
    SectionTitleComponent,
    SectionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
