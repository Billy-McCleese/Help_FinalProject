import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.apiService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }
}
