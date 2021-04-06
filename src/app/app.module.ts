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
import {PORTFOLIO_URL_TOKEN} from './data/services/portfolio.service';
import {SliderComponent} from './components/popup/slider/slider.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatDialogModule} from '@angular/material/dialog';
import {SERVICES_URL_TOKEN} from './data/services/services.service';
import {ADDITIONAL_SERVICES_URL_TOKEN} from './data/services/additional-services.service';
import {ABOUT_URL_TOKEN} from './data/services/about.service';
import {SendMessageComponent} from './components/send-message/send-message.component';
import {OUR_ADVANTAGE_URL_TOKEN} from './data/services/our-advantage.service';
import {EXECUTION_URL_TOKEN} from './data/services/execution.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MAIL_URL_TOKEN} from './data/services/mail.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CONTACT_URL_TOKEN} from './data/services/contact.service';
import {FooterComponent} from './components/footer/footer.component';

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
    ContactsComponent,
    SliderComponent,
    SendMessageComponent,
    FooterComponent,
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
    CarouselModule,
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: MAIN_LEAD_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/main-lead`
    },
    {
      provide: PORTFOLIO_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/portfolio`
    },
    {
      provide: ADDITIONAL_SERVICES_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/additional-services`
    },
    {
      provide: SERVICES_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/services`
    },
    {
      provide: ABOUT_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/about`
    },
    {
      provide: OUR_ADVANTAGE_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/our-advantage`
    },
    {
      provide: EXECUTION_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/execution`
    },
    {
      provide: MAIL_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/mail`
    },
    {
      provide: CONTACT_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/contacts`
    },
  ],
  entryComponents: [
    SliderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
