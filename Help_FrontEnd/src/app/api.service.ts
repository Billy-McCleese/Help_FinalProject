import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from './favorite';
import { Review } from './review';
import { User } from './user';
import { RealEstate } from './real-estate';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private readonly url = 'https://localhost:7105/api/'
  private readonly externalUrl = 'https://us-real-estate.p.rapidapi.com/v2/for-rent-by-zipcode?zipcode='

  
  //MLSAPI
  GetRentalDataByZip(zip: number, limit: number, offset: number, sort: string): Observable<RealEstate[]>{
    return this.http.get<RealEstate[]>(this.externalUrl + 'RealEstate' + zip + '&limit=' + limit + '&offset=' + offset + '&sort=' + sort);
  }


  //Our API
  GetFavorites(): Observable<Favorite[]>{
    return this.http.get<Favorite[]>(this.url + 'Favorite');
  }

  AddFavorite(favoriteToAdd: Favorite): Observable<Favorite[]>{
    return this.http.post<Favorite[]>(this.url + 'Favorite', favoriteToAdd);
  }

  GetReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.url + 'Review');
  }

  AddReview(reviewToAdd: Review): Observable<Review[]>{
    return this.http.post<Review[]>(this.url + 'Review', reviewToAdd);
  }

  GetUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url + 'User');
  }

}
