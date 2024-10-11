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
    DetailsComponent
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
