import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo, Result } from '../real-estate';
import { DefaulterPipe } from '../pipes/defaulter.pipe';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Review } from '../review';

@Component({
  selector: 'app-property-details-modal',
  templateUrl: './property-details-modal.component.html',
  styleUrls: ['./property-details-modal.component.css'],
})
export class PropertyDetailsModalComponent implements OnInit {
  @Input() visible = true;
  @Input() propertyDetail?: Result;
  onModalClose?: () => void; 
  reviews: any[];
  

  constructor(public modal: NgbActiveModal) {
    //this.propertyDetail?= '123';
    this.reviews = [
      // Sample review objects
      {
        address: '123 Main St',
        city: 'City',
        state: 'State',
        zip: '12345',
        Reporter: 'John Doe',
        category: 'Category',
        title: 'Review Title',
        Detail: 'Review Detail'
      },
      // More review objects...
    ];
  }
  

  ngOnInit(): void {
    console.log(this.propertyDetail);
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
}
