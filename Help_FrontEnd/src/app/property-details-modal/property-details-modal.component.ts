
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo, Result } from '../real-estate';
import { DefaulterPipe } from '../pipes/defaulter.pipe';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Review } from '../review';
import { ApiService } from '../api.service';
import { Favorite } from '../favorite';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-property-details-modal',
  templateUrl: './property-details-modal.component.html',
  styleUrls: ['./property-details-modal.component.css'],
})
export class PropertyDetailsModalComponent implements OnInit {
  @Input() visible = true;
  @Input() propertyDetail?: Result;
  onModalClose?: () => void; 
  reviewList: Review[] = [];
  isFavorite: boolean = false;

  constructor(public modal: NgbActiveModal, private apiService: ApiService) {}
  

  ngOnInit(): void {
    console.log(this.propertyDetail);
    this.getReviews();
    
    const address = this.getHouseAddress();
    this.apiService.getFavoritesByAddress(address).subscribe(
      (favorites) => {
        this.isFavorite = favorites && favorites.length > 0; // Update the isFavorite flag based on the response
      }, 
  );
  }

  getHouseImages() {
    return (
      this.propertyDetail?.photos
        ?.map((photo: Photo) => photo.href)
        ?.filter((v) => !!v) ?? []
    );
  }

  getSanitizedValue(data: any): string {
    return new DefaulterPipe().transform(data);
  }

  getHouseArea() {
    return (
      this.propertyDetail?.description.sqft ??
      this.propertyDetail?.description.sqft_max ??
      this.propertyDetail?.description.sqft_min ??
      0
    );
  }

  getHouseBathRooms() {
    return (
      this.propertyDetail?.description?.baths ??
      this.propertyDetail?.description?.baths_max ??
      this.propertyDetail?.description?.baths_min ??
      0
    );
  }

  getHouseBedRooms() {
    return (
      this.propertyDetail?.description?.beds ??
      this.propertyDetail?.description?.beds_max ??
      this.propertyDetail?.description?.beds_min ??
      0
    );
  }

  getHouseGarage() {
    return (
      this.propertyDetail?.description?.garage ??
      this.propertyDetail?.description?.garage_max ??
      this.propertyDetail?.description?.garage_min ??
      0
    );
  }

  getHouseName() {
    return this.propertyDetail?.description?.name ?? 'Unnamed';
  }

  getYearBuiltIn() {
    return this.getSanitizedValue(this.propertyDetail?.description?.year_built);
  }

  getPropertyType() {
    return this.getSanitizedValue(this.propertyDetail?.description?.type);
  }

  getPropertySubType() {
    return this.getSanitizedValue(this.propertyDetail?.description?.sub_type);
  }

  getHouseSpecs() {
    const bedRooms = this.getHouseBedRooms();
    const bathRooms = this.getHouseBathRooms();
    const sqft = this.getHouseArea();
    return `${this.getSanitizedValue(bedRooms)} bds | ${this.getSanitizedValue(
      bathRooms
    )} ba | ${this.getSanitizedValue(sqft)} sqft`;
  }

  getHouseCountry() {
    return new DefaulterPipe().transform(
      this.propertyDetail?.location?.address?.country
    );
  }

  getHouseCity() {
    return new DefaulterPipe().transform(
      this.propertyDetail?.location?.address?.city
    );
  }

  getHouseStreet() {
    const streetName = this.propertyDetail?.location?.address?.street_name;
    const streetNumber = this.propertyDetail?.location?.address?.street_number;
    if (streetNumber && streetName) {
      return `${streetNumber} ${streetName}`;
    } else if (!streetNumber && streetName) {
      return `${streetName}`;
    } else {
      return new DefaulterPipe().transform(null);
    }
  }

  getHouseState() {
    const state = this.propertyDetail?.location?.address?.state;
    const stateCode = this.propertyDetail?.location?.address?.state_code;
    if (state && stateCode) {
      return `${state} ${stateCode}`;
    } else if (!stateCode && state) {
      return `${state}`;
    } else {
      return new DefaulterPipe().transform(null);
    }
  }

  getHouseAddressLine() {
    return new DefaulterPipe().transform(
      this.propertyDetail?.location?.address?.line
    );
  }

  getHouseAddress() {
    const addressObj = this.propertyDetail?.location?.address;
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

  getIsDealActive() {
    return (
      this.propertyDetail?.flags?.is_deal_available ||
      this.propertyDetail?.flags?.is_for_rent
    );
  }

  closeModal() {
    if (this.onModalClose) this.onModalClose();
    this.modal.close();
  }

  getReviews(): void {
    this.apiService.getReviews().subscribe((reviews) => {
      this.reviewList = reviews;
      console.log(reviews)
      console.log(this.reviewList)
    });
  }

  addFavorite(favorite: Favorite): void {
    this.apiService.createFavorite(favorite).subscribe((response) => {
      console.log('Favorite added:', response);
    }
    );
  }

  deleteFavorite(completeAddress: string): void {
    this.apiService.deleteFavorite(completeAddress).subscribe(
      () => {
        console.log('Favorite deleted successfully');
      }
    );
    }
}