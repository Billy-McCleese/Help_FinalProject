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
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { ReviewFormComponent } from './review-form/review-form.component'; 
import { FavoritesComponent } from './favorites/favorites.component';
import { InputTextModule } from 'primeng/inputtext';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
    DashboardComponent,
    AuthComponent,
    LogoutComponent,
    ReviewFormComponent,
    FavoriteListComponent,
    FavoritesComponent,
    ContactUsComponent
    
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
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
