import { Component, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { UserType } from '../user-type.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { RealEstate } from '../real-estate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  onAuthPage = false;
  isLoggedIn = false;
  searchForm: FormGroup;
  @Output() searchQueryEvent = new EventEmitter<number>();

  constructor(private router: Router, private storageService: StorageService, private formBuilder: FormBuilder, private apiService: ApiService) {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''] // You can provide an initial value if needed
    });
  }

  ngOnInit(): void {
    this.setAuthPageContent();
    this.setLoginContent();
    console.log(this.apiService.zip)

    //add
    // this.searchForm.patchValue({
    //   searchQuery: ''
    // });
    //add
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

onSearch(): void {
  const searchQuery = Number(this.searchForm.value.searchQuery);
  //this.apiService.zip = searchQuery;
  this.apiService.zip.next(searchQuery);
  console.log(this.apiService.zip);

  //this.ngOnInit();
  //this.router.navigate(['/rentals']);
}

  
}
