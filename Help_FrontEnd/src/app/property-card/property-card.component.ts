import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorite } from '../favorite';
import { Review } from '../review';
import { User } from '../user';
import { RealEstate } from '../real-estate';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent  implements OnInit {
  favoriteList: Favorite[] = [];
  reviewList: Review[] = [];
  userList: User[] = [];

  realestateList: RealEstate[] = [];
  realestate: RealEstate = {} as RealEstate;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFavorites();
    this.getUsers();
    this.getReviews();
  }

  getFavorites(): void {
    this.apiService.getFavorites().subscribe(favorites => {
      this.favoriteList = favorites;
    });
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

  getReviews(): void {
    this.apiService.getReviews().subscribe(reviews => {
      this.reviewList = reviews;
    });
  }
}

