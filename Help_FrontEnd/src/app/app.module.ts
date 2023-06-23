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

import { DialogModule } from 'primeng/dialog';
import { PropertyDetailsModalComponent } from './property-details-modal/property-details-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabViewModule } from 'primeng/tabview';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';

import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { ReviewFormComponent } from './review-form/review-form.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';



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
    PropertyDetailsModalComponent,
    ReviewFormComponent,
    FavoriteListComponent,
    FavoritesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    CardModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    NgbModule,
    TabViewModule,
    ChipModule,
    GalleriaModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}