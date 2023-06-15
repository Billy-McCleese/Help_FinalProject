import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorite } from '../favorite';
import { Review } from '../review';
import { User } from '../user';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  favoriteList: Favorite[] = []
  reviewList: Review[] = []
  userList: User[] = []

  constructor(private apiService: ApiService){}

  async ngOnInit(): Promise<void> {

    this.apiService.GetFavorites()
    .subscribe(result => {
      this.favoriteList = result;
      console.log(result);
    })

    this.apiService.GetReviews()
    .subscribe(result => {
      this.reviewList = result;
      console.log(result);
    })

    this.apiService.GetUsers()
    .subscribe(result => {
      this.userList = result;
      console.log(result);
    })

  }

}
