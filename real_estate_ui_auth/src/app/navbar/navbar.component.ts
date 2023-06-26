import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { UserType } from '../user-type.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  onAuthPage = false;
  isLoggedIn = false;

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.setAuthPageContent();
    this.setLoginContent();
  }

  private setLoginContent(): void {
    this.storageService.userType$.subscribe((ut) => {
      this.isLoggedIn = ut === UserType.APP_USER;
    });
  }

  private setAuthPageContent(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onAuthPage = event.url === '/';
      }
    });
  }

  navigateForAuth() {
    if (this.isLoggedIn) {
      this.router.navigate(['/logout']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
