import { Component } from '@angular/core';
import { RealEstate, Result } from './real-estate';
import { ApiService } from './api.service';
import { UIView } from './ui-view.enum';

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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getGetRentalDataByZip();
  }

  private getGetRentalDataByZip() {
    this.apiService
      .GetRentalDataByZip(44138, 10, 0, 'lowest_price')
      .subscribe((result: RealEstate) => {
        this.realestate = result;
        console.log(this.realestate);
      });
  }

  public getResults(): Result[] {
    return this.realestate?.data?.home_search?.results ?? ([] as Result[]);
  }

  public switchViews(to: any) {
    console.log(to);
    this.currentView = to;
  }
  handleMarkerClick(property: Result) {
    // Perform any actions you want with the clicked property
    console.log('Clicked property:', property);
  }  
}
