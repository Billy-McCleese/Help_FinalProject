import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RealEstate, Result } from '../real-estate';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  @Input('properties') properties: RealEstate = {} as RealEstate;
  realestateList: RealEstate[] = [];
  realestate: RealEstate = {} as RealEstate;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}

  getResults() {
    return this.properties?.data?.home_search?.results ?? [];
  }
}
