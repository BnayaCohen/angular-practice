import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { FilterArrPipe } from './pipes/filter-arr.pipe';

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
    StatisticsPageComponent,
    ContactEditComponent,
    AppHeaderComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
    FilterArrPipe
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
