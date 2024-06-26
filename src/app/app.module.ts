import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './common/card/card.component';
import { MainButtonComponent } from './common/main-button/main-button.component';
import { SectionTitleComponent } from './common/section-title/section-title.component';
import { SectionComponent } from './common/section/section.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './page-sections/education-and-courses/courses/courses.component';
import { EducationAndCoursesComponent } from './page-sections/education-and-courses/education-and-courses.component';
import { EducationComponent } from './page-sections/education-and-courses/education/education.component';
import { ItemComponent } from './page-sections/education-and-courses/item/item.component';
import { ExperiencesComponent } from './page-sections/experiences/experiences.component';
import { ProjectsComponent } from './page-sections/projects/projects.component';
import { ReachOutToMeComponent } from './page-sections/reach-out-to-me/reach-out-to-me.component';
import { ResearchComponent } from './page-sections/research/research.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ThemeSwitcherComponent } from './header/theme-switcher/theme-switcher.component';
import { AngleBottomIconComponent } from './page-sections/education-and-courses/courses/angle-bottom-icon/angle-bottom-icon.component';
import { AngleTopIconComponent } from './page-sections/education-and-courses/courses/angle-top-icon/angle-top-icon.component';
import { LocationIconComponent } from './page-sections/reach-out-to-me/location-icon/location-icon.component';
import { FooterComponent } from './footer/footer.component';

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
    EducationComponent,
    CoursesComponent,
    ItemComponent,
    CardComponent,
    ReachOutToMeComponent,
    ThemeSwitcherComponent,
    AngleBottomIconComponent,
    AngleTopIconComponent,
    LocationIconComponent,
    FooterComponent,
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
