import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from './favorite';
import { Review } from './review';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private readonly url = 'https://localhost:7105/api/'


  GetFavorites(): Observable<Favorite[]>{
    return this.http.get<Favorite[]>(this.url + 'Favorite');
  }

  GetReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.url + 'Review');
  }

  GetUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url + 'User');
  }
}
