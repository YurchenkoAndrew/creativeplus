import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HomePageComponent} from './views/home-page/home-page.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MainLeadComponent} from './components/main-lead/main-lead.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ServicesComponent} from './components/services/services.component';
import {AboutComponent} from './components/about/about.component';
import {OurAdvantagesComponent} from './components/our-advantages/our-advantages.component';
import {OrderExecutionSchemeComponent} from './components/order-execution-scheme/order-execution-scheme.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {MAIN_LEAD_URL_TOKEN} from './data/services/main-lead.service';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    NavigationComponent,
    MainLeadComponent,
    PortfolioComponent,
    ServicesComponent,
    AboutComponent,
    OurAdvantagesComponent,
    OrderExecutionSchemeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAIN_LEAD_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/main-lead`
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
