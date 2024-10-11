import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Route, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/footer-pages/about/about.component';
import { PrivacyComponent } from './pages/footer-pages/privacy/privacy.component';
import { LicensingComponent } from './pages/footer-pages/licensing/licensing.component';
import { ContactComponent } from './pages/footer-pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { FiatComponent } from './navbar/navbar-pages/fiat/fiat.component';
import { DropdownElementsComponent } from './navbar/dropdown-elements/dropdown-elements.component';
import { AudiComponent } from './pages/audi/audi.component';
import { AlfaComponent } from './pages/alfa/alfa.component';
import { BmwComponent } from './pages/bmw/bmw.component';
import { JaguarComponent } from './pages/jaguar/jaguar.component';
import { FordComponent } from './pages/ford/ford.component';
import { JeepComponent } from './pages/jeep/jeep.component';
import { OpelComponent } from './pages/opel/opel.component';

const routes: Route[] = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "privacy",
    component: PrivacyComponent
  },
  {
    path: "licensing",
    component: LicensingComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "fiat",
    component: FiatComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ContactsComponent,
    AboutComponent,
    PrivacyComponent,
    LicensingComponent,
    ContactComponent,
    DetailsComponent,
    FiatComponent,
    DropdownElementsComponent,
    AudiComponent,
    AlfaComponent,
    BmwComponent,
    JaguarComponent,
    FordComponent,
    JeepComponent,
    OpelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
