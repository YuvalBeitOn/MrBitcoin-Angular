import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { DatePipe } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ConverterComponent } from './cmps/converter/converter.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { UserInfoComponent } from './cmps/user-info/user-info.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ConverterComponent,
    MovePreviewComponent,
    MoveListComponent,
    TransferFundComponent,
    UserInfoComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactsPageComponent,
    HomePageComponent,
    SignupPageComponent,
    StatisticPageComponent,
    UserProfileComponent
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
