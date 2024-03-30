import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { EducationAndCoursesComponent } from './education-and-courses/education-and-courses.component';
import { MainButtonComponent } from './main-button/main-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    SocialMediaComponent,
    EducationAndCoursesComponent,
    MainButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
