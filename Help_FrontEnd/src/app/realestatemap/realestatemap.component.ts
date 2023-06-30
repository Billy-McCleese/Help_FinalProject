import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MapAnchorPoint, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { RealEstate, Result } from '../real-estate';
import { DefaulterPipe } from '../pipes/defaulter.pipe';
import { ApiService } from '../api.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-realestatemap',
  templateUrl: './realestatemap.component.html',
  styleUrls: ['./realestatemap.component.css'],
})
//export class RealestatemapComponent implements OnInit {
export class RealestatemapComponent {
  @Input('properties') properties: RealEstate = {} as RealEstate;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow = {} as MapInfoWindow;
  @Output() setSelectedProperty = new EventEmitter<Result>();

  public propertyInfoWindowDetail?: Result;
  public markers: { lat: number; lng: number }[] = [];
  public mapOptions: google.maps.MapOptions = {
    zoom: 12,
    mapTypeId: 'roadmap',
  };
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['properties'] && !changes['properties'].firstChange) {
      this.markers = [];
      this.setPropertyMarkers();
      console.log("Hit OnChanges");
    }
  }

  ngOnInit(): void {
    this.markers = [];
    this.setPropertyMarkers();
  }

  setPropertyMarkers() {
    this.markers = [];
    const results = this.properties?.data?.home_search?.results;
    console.log("Hit Method")
    console.log(results)
    if (results) {
      results.forEach((result: Result) => {
        const crds = this.getPropertyCoordinates(result);
        if (crds) this.markers.push(crds);
      });
    }
    // if (this.markers.length) {
    //       const lastMarker = this.markers[this.markers.length - 1];
    //       this.mapOptions.center = { lat: lastMarker.lat, lng: lastMarker.lng };
    //     } else {
    //       this.mapOptions.center = undefined;
    //     }

      const lastMarker = this.markers[this.markers.length - 1];
      console.log(lastMarker)
      this.mapOptions.center = { lat: lastMarker.lat, lng: lastMarker.lng };
    
  }
  
  private setPropertyInfoWindowDetail(lat: number, lng: number) {
    const property = this.getPropertyByCoordinates(lat, lng);
    console.log(property);
    if (property) {
      this.propertyInfoWindowDetail = property;
    }
  }

  private getPropertyCoordinates(property: Result) {
    if (
      property?.location?.address?.coordinate?.lat &&
      property?.location?.address?.coordinate?.lon
    ) {
      return {
        lat: property.location?.address?.coordinate?.lat,
        lng: property.location?.address?.coordinate?.lon,
      };
    } else {
      return null;
    }
  }

  private getPropertyByCoordinates(
    lat: number,
    lon: number
  ): Result | undefined {
    return this.properties?.data?.home_search?.results?.find(
      (property: Result) => {
        const crds = this.getPropertyCoordinates(property);
        if (crds) {
          return crds.lat === lat && crds.lng === lon;
        } else {
          return false;
        }
      }
    );
  }

  getHouseSpecs(type: 'inner' | 'area') {
    if (!this.propertyInfoWindowDetail) return;

    if (type === 'inner') {
      const bedRooms =
        this.propertyInfoWindowDetail.description?.beds ??
        this.propertyInfoWindowDetail.description?.beds_max ??
        this.propertyInfoWindowDetail.description?.beds_min ??
        0;

      const bathRooms =
        this.propertyInfoWindowDetail.description?.baths ??
        this.propertyInfoWindowDetail.description?.baths_max ??
        this.propertyInfoWindowDetail.description?.baths_min ??
        0;
      return `${bedRooms} bds | ${bathRooms} ba `;
    } else {
      const sqft =
        this.propertyInfoWindowDetail.description.sqft ??
        this.propertyInfoWindowDetail.description.sqft_max ??
        this.propertyInfoWindowDetail.description.sqft_min ??
        0;

      return `${sqft} sqft`;
    }
  }

  getHouseAddress() {
    const addressObj = this.propertyInfoWindowDetail?.location?.address;
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
    const photos = this.propertyInfoWindowDetail?.photos;
    let thumbnail =
      'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
    if (photos?.length) {
      thumbnail = photos[0].href;
    }
    return thumbnail;
  }

  openInfoWindow(marker: MapMarker) {
    const crds = marker.getPosition();
    if (crds) {
      this.setPropertyInfoWindowDetail(crds.lat(), crds.lng());
      setTimeout(() => this.infoWindow?.open(marker));
    } else {
      alert('No property to rent here');
    }
  }

  closeInfoWindow() {
    this.infoWindow?.close();
  }

  setSelectedPropertyForPopup(marker: MapMarker) {
    const crds = marker.getPosition();
    if (crds) {
      const propertyToSet = this.getPropertyByCoordinates(
        crds.lat(),
        crds.lng()
      );
      if (propertyToSet) {
        this.setSelectedProperty.emit(propertyToSet);
        return;
      }
    }
    alert('Unable to open this property');
  }
}
