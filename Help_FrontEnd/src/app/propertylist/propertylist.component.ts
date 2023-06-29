import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { RealEstate, Result } from '../real-estate';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  @Input('properties') properties: RealEstate = {} as RealEstate;
  @Output('setSelectedProperty') setSelectedProperty =
    new EventEmitter<Result>();
  realestateList: RealEstate[] = [];
  realestate: RealEstate = {} as RealEstate;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}






  getResults() {
    return this.properties?.data?.home_search?.results ?? [];
  }

  selectProperty(property: Result) {
    this.setSelectedProperty.emit(property);
  }
}
