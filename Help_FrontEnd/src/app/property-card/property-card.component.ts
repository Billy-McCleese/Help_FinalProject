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
export class PropertyCardComponent implements OnInit {

  favoriteList: Favorite[] = [];
  reviewList: Review[] = [];
  userList: User[] = [];

  realestateList: RealEstate[] = [];
  realestate: RealEstate = {} as RealEstate;

  constructor(private apiService: ApiService){}

  async ngOnInit(): Promise<void> {

    //For Testing Only

    // const testFavorite: Favorite = {
    //   Id: 0,
    //   UserId: 2,
    //   CompleteAddress: '123mystreet,anytown,12345'
    // }

    // this.AddFavorite(testFavorite)

    // const testReview: Review = {
    //   Id: 0,
    //   CompleteAddress: '123mystreet,anytown,12345',
    //   PropertyAdress: '123mystreet',
    //   PropertyCity: 'anytown',
    //   PropertyState: 'anyState',
    //   PropertyZip: 12345,
    //   Reporter: 'John Doe',
    //   Category: 'Prior Renter',
    //   Title: 'Terrible Place to Live!',
    //   Detail: 'This was not a good rental property. The place was a dump and the neighbors were terrible. Also I didnt like the landlord.'
    // }

    // this.AddReview(testReview)

    //Populate initial arrays

    this.apiService.GetFavorites()
    .subscribe(result => {
      this.favoriteList = result;
      console.log(result);
    })

    this.apiService.GetReviews()
    .subscribe(result => {
      this.reviewList = result;
      console.log(result);
    });

    this.apiService.GetUsers()
    .subscribe(result => {
      this.userList = result;
      console.log(result);
    });

    //Real Estate API call
    this.apiService.GetRentalDataByZip(44138, 10, 0, 'lowest_price')
    .subscribe(result => {
      this.realestate = result;
      console.log(result);
    });
  }

  AddFavorite(favoriteToAdd: Favorite){
    this.apiService.AddFavorite(favoriteToAdd)
    .subscribe(result => {
      console.log(favoriteToAdd);
    }); 
  }

  AddReview(reviewToAdd: Review){
    this.apiService.AddReview(reviewToAdd)
    .subscribe(result => {
      console.log(reviewToAdd);
    }); 
  }

}
