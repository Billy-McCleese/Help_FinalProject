import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  favorites: Favorite[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteService.getFavorites().subscribe(
      (favorites) => {
        this.favorites = favorites;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteFavorite(CompleteAddress: string): void {
    this.favoriteService.deleteFavorite(CompleteAddress).subscribe(
      () => {
        
        this.loadFavorites(); // Refresh the list after deletion
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createFavorite(favorite: Favorite): void {
    this.favoriteService.createFavorite(favorite).subscribe(
      () => {
        
        this.loadFavorites(); // Refresh the list after saving
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
