import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/view/landing/landing.component';
import { AboutComponent } from './components/landing/about/about.component';
import { MenuComponent } from './components/landing/menu/menu.component';
import { SkillsComponent } from './components/landing/skills/skills.component';
import { SchollComponent } from './components/landing/scholl/scholl.component';
import { JobComponent } from './components/landing/job/job.component';
import { PortfolioComponent } from './components/landing/portfolio/portfolio.component';
import { InterestComponent } from './components/landing/interest/interest.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    MenuComponent,
    SkillsComponent,
    SchollComponent,
    JobComponent,
    PortfolioComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
