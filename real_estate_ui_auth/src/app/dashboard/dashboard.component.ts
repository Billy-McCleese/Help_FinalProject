import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { PropertyDetailsModalComponent } from '../property-details-modal/property-details-modal.component';
import { RealEstate, Result } from '../real-estate';
import { UIView } from '../ui-view.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title = 'Help_FrontEnd';
  realestate: RealEstate = {} as RealEstate;
  currentView: UIView = UIView.list;
  uiView = UIView;

  selectedProperty?: Result;
  showModal: boolean = false;

  constructor(private apiService: ApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getGetRentalDataByZip();
  }

  private getGetRentalDataByZip() {
    this.apiService
      .GetRentalDataByZip(44138, 10, 0, 'lowest_price')
      .subscribe((result: RealEstate) => {
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
    console.log('->', property);
    this.selectedProperty = property;
    if (property) {
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
