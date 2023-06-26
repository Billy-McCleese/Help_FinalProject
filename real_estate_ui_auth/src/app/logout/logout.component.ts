import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.storageService.wipeStorage();
    this.router.navigate(['/']);
  }
}
