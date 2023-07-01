import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Favorite } from './favorite';
import { Review } from './review';
import { User } from './user';
import { RealEstate } from './real-estate';
import { AuthUser } from './auth-user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private readonly url = 'https://localhost:7105/api/';
  //zip: number = 10001;
  public zip: BehaviorSubject<number> = new BehaviorSubject<number>(48188);
  limit: number = 10;
  offset: number = 0;
  sort: string = 'lowest_price';

  // MLSAPI External API
  GetRentalDataByZip(): Observable<RealEstate>{
    return this.http.get<RealEstate>(this.url + 'RealEstate/rent-by-zipcode?zipcode=' + this.zip.getValue() + '&limit=' + this.limit + '&offset=' + this.offset + '&sort=' + this.sort);
  }

  // Favorite Methods

  getFavorites(): Observable<Favorite[]> {
    const url = `${this.url}Favorite`;
    return this.http.get<Favorite[]>(url);
  }

  getFavorite(id: number): Observable<Favorite> {
    const url = `${this.url}Favorite${id}`;
    return this.http.get<Favorite>(url);
  }

  createFavorite(favorite: Favorite): Observable<Favorite> {
    const url = `${this.url}Favorite`;
    return this.http.post<Favorite>(url, favorite);
  }

  updateFavorite(id: number, favorite: Favorite): Observable<any> {
    const url = `${this.url}Favorite${id}`;
    return this.http.put(url, favorite);
  }

  deleteFavorite(CompleteAddress: string): Observable<any> {
    const url = `${this.url}Favorite/${CompleteAddress}`;
    return this.http.delete(url);
  }
  // User Methods

  getUsers(): Observable<User[]> {
    const url = `${this.url}User`;
    return this.http.get<User[]>(url);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.url}User/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: User): Observable<User> {
    const url = `${this.url}User`;
    return this.http.post<User>(url, user);
  }

  loginUser(user: User): Observable<AuthUser> {
    const url = `${this.url}User/login`;
    return this.http.post<AuthUser>(url, user);
  }

  updateUser(id: number, user: User): Observable<any> {
    const url = `${this.url}/User/${id}`;
    return this.http.put(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.url}/User/${id}`;
    return this.http.delete(url);
  }

  // Review Methods

  getReviews(): Observable<Review[]> {
    const url = `${this.url}Review`;
    return this.http.get<Review[]>(url);
  }

  getReview(id: number): Observable<Review> {
    const url = `${this.url}/Review/${id}`;
    return this.http.get<Review>(url);
  }

  createReview(review: Review): Observable<Review> {
    const url = `${this.url}Review`;
    return this.http.post<Review>(url, review);
  }

  updateReview(id: number, review: Review): Observable<any> {
    const url = `${this.url}/Review/${id}`;
    return this.http.put(url, review);
  }

  deleteReview(id: number): Observable<any> {
    const url = `${this.url}/Review/${id}`;
    return this.http.delete(url);
  }  
  
}
