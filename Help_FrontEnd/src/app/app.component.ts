import { Component, Output, EventEmitter } from '@angular/core';
import { RealEstate, Result } from './real-estate';
import { ApiService } from './api.service';
import { UIView } from './ui-view.enum';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PropertyDetailsModalComponent } from './property-details-modal/property-details-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Help_FrontEnd';
  realestate: RealEstate = {} as RealEstate;
  currentView: UIView = UIView.list;
  uiView = UIView;
  @Output() selectedPropertyEmitter = new EventEmitter<any>();
  selectedProperty?: Result;
  showModal: boolean = false;

  constructor(private apiService: ApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
    //this.getGetRentalDataByZip(48188, 6, 1, 'lowest_price');
  }

  // private getGetRentalDataByZip(zip: number, limit: number, offset: number, sort: string): void {
  //   this.apiService.GetRentalDataByZip(zip, limit, offset, sort).subscribe((result: RealEstate) => {
  //     this.realestate = result;
  //   });
  // }
  
  private getGetRentalDataByZip(zip: number, limit: number, offset: number, sort: string): void {
    this.apiService.GetRentalDataByZip().subscribe((result: RealEstate) => {
      this.realestate = result;
    });
  }

  public getResults(): Result[] {
    return this.realestate?.data?.home_search?.results ?? ([] as Result[]);
  }

  public switchViews(to: any) {
    console.log(to);
    this.currentView = to;
  }

  public setSelectedProperty(property: any) {
    this.selectedProperty = property;
    if (property) {
      this.selectedPropertyEmitter.emit(property);
      this.popModal();
    }

    const isDeviceMidSize = window.innerWidth <= 768;

    const modalRef = this.modalService.open(PropertyDetailsModalComponent, {
      centered: false,
      fullscreen: isDeviceMidSize,
      size: isDeviceMidSize ? undefined : 'xl',
      scrollable: isDeviceMidSize,
    });
    modalRef.componentInstance.propertyDetail = this.selectedProperty;
    modalRef.componentInstance.onModalClose = this.closeModal;
    modalRef.result.then(
      (result) => {
        this.closeModal();
      },
      (reason) => {
        this.closeModal();
      }
    );
  }

  private popModal() {
    this.showModal = true;
  }

  public closeModal() {
    this.showModal = false;
    this.selectedProperty = undefined;
  }
}
