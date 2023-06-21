import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RealestatemapComponent } from './realestatemap/realestatemap.component';
import { CardModule } from 'primeng/card';
import { DefaulterPipe } from './pipes/defaulter.pipe';
import { ButtonModule } from 'primeng/button';
import { ViewSwitcherButtonComponent } from './view-switcher-button/view-switcher-button.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertylistComponent,
    PropertyCardComponent,
    NavbarComponent,
    RealestatemapComponent,
    DefaulterPipe,
    ViewSwitcherButtonComponent,
    FavoriteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
