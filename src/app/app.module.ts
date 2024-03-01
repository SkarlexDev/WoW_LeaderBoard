import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MythicPlusComponent } from './mythic-plus/mythic-plus.component';

import { HttpClientModule } from '@angular/common/http';
import { SortByKeysPipe } from './core/core-data-rankings/rankingsSortPipe';
import { RankingsComponent } from './core/rankings/rankings.component';


@NgModule({
  declarations: [
    AppComponent,
    SortByKeysPipe,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    MythicPlusComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
