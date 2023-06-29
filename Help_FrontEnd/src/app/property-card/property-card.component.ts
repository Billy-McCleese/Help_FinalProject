import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorite } from '../favorite';
import { Review } from '../review';
import { User } from '../user';
import { RealEstate, Result } from '../real-estate';
import { DefaulterPipe } from '../pipes/defaulter.pipe';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  @Input('propertyDetail') propertyDetail: Result = {} as Result;
  favoriteList: Favorite[] = [];
  reviewList: Review[] = [];
  userList: User[] = [];

  realestateList: RealEstate[] = [];
  realestate: RealEstate = {} as RealEstate;

  constructor(private apiService: ApiService) {

    this.getUsers();

  }

  ngOnInit(): void {
    this.getFavorites();
    this.getUsers();
    this.getReviews();    
  }

  getFavorites(): void {
    this.apiService.getFavorites().subscribe((favorites) => {
      this.favoriteList = favorites;
    });
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe((users) => {
      this.userList = users;
    });

    this.apiService
      //.GetRentalDataByZip(44138, 10, 0, 'lowest_price')
      .GetRentalDataByZip()
      .subscribe((result) => {
        this.realestate = result;
        console.log(result);
      });
  }

  getReviews(): void {
    this.apiService.getReviews().subscribe((reviews) => {
      this.reviewList = reviews;
    });
  }

  getSanitizedValue(data: any): string {
    return new DefaulterPipe().transform(data);
  }

  getHouseSpecs() {
    const bedRooms =
      this.propertyDetail.description?.beds ??
      this.propertyDetail.description?.beds_max ??
      this.propertyDetail.description?.beds_min ??
      0;

    const bathRooms =
      this.propertyDetail.description?.baths ??
      this.propertyDetail.description?.baths_max ??
      this.propertyDetail.description?.baths_min ??
      0;

    const sqft =
      this.propertyDetail.description.sqft ??
      this.propertyDetail.description.sqft_max ??
      this.propertyDetail.description.sqft_min ??
      0;

    return `${bedRooms} bds | ${bathRooms} ba | ${sqft} sqft - House for rent`;
  }

  getHouseAddress() {
    const addressObj = this.propertyDetail.location?.address;
    const defaulter = new DefaulterPipe();
    if (addressObj) {
      const streetNumber = defaulter.transform(addressObj.street_number);
      const streetName = defaulter.transform(addressObj.street_name);
      const city = defaulter.transform(addressObj.city);
      const state = defaulter.transform(addressObj.state);
      const stateCode = defaulter.transform(addressObj.state_code);
      const country = defaulter.transform(addressObj.country);
      return `${streetNumber} ${streetName} ${city}, ${state} ${stateCode} ${country}`;
    }
    return '--';
  }

  getHouseThumbnail() {
    const photos = this.propertyDetail?.photos;
    let thumbnail =
      'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    if (photos?.length) {
      thumbnail = photos[0].href;
    }
    return thumbnail;
  }

  getPropertyId() {
    return new DefaulterPipe().transform(this.propertyDetail.property_id);
  }
}
