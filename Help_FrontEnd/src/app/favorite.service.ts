import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getFavorite(id: number): Observable<Favorite> {
    return this.http.get<Favorite>(`${this.apiUrl}/${id}`);
  }

  createFavorite(favorite: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.apiUrl}`, favorite);
  }

  updateFavorite(id: number, favorite: Favorite): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, favorite);
  }

  deleteFavorite(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
