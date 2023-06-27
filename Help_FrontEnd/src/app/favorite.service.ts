import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from './favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'api/favorite'; 

  constructor(private http: HttpClient) { }

  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.apiUrl}`);
  }

  getFavorite(Id: number): Observable<Favorite> {
    return this.http.get<Favorite>(`${this.apiUrl}/${Id}`);
  }

  createFavorite(favorite: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.apiUrl}`, favorite);
  }

  updateFavorite(Id: number, favorite: Favorite): Observable<any> {
    return this.http.put(`${this.apiUrl}/${Id}`, favorite);
  }

  deleteFavorite(completeAddress: string): Observable<any> {
    const params = new HttpParams().set('completeAddress', completeAddress);
    return this.http.delete(`${this.apiUrl}`, { params });
  }
  
}
