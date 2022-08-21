import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsPageComponent,
    ContactFilterComponent,
    ChartComponent,
    StatisticsPageComponent
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
