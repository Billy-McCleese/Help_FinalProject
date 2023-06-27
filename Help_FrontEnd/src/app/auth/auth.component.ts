import { Component, OnInit } from '@angular/core';
import { AuthType } from '../auth-type.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../user';
import { AuthUser } from '../auth-user';
import { UserType } from '../user-type.enum';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  currentAuthMode = AuthType.login;
  authType = AuthType;

  authForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if already logged in as app user (only, not guest)
    if (
      (this.storageService.storedUser as Object).hasOwnProperty('id') &&
      (this.storageService.storedUser as Object).hasOwnProperty('email') &&
      this.storageService.storedUserType
    ) {
      // If Yes, then navigate to rentals, skipping login page
      //this.navigateToRentals();
    }
  }

  switchAuthType() {
    if (this.currentAuthMode === AuthType.login) {
      this.currentAuthMode = AuthType.register;
    } else {
      this.currentAuthMode = AuthType.login;
    }
  }

  get emailError() {
    const emailErrors = this.authForm.controls['email'].errors;
    if (this.authForm.dirty) {
      if (emailErrors?.['required']) {
        return 'Email is required';
      } else if (emailErrors?.['email']) {
        return 'Please enter valid email';
      }
    }
    return null;
  }

  get passwordError() {
    const emailErrors = this.authForm.controls['password'].errors;
    if (this.authForm.dirty) {
      if (emailErrors?.['required']) {
        return 'Password is required';
      }
    }
    return null;
  }

  private setLoggedInUserType(userType: UserType) {
    this.storageService.setUserType(userType);
  }

  private navigateToRentals() {
    this.router.navigate(['/rentals'], { replaceUrl: true });
  }

  loginAsGuest() {
    this.storageService.wipeStorage();
    this.setLoggedInUserType(UserType.GUEST);
    this.navigateToRentals();
  }

  onSubmit() {
    if (this.authForm.valid) {
      const user: User = {
        Id: -1,
        Name: this.authForm.controls['email'].value,
        Password: this.authForm.controls['password'].value,
      };

      if (this.currentAuthMode === this.authType.login) {
        this.apiService.loginUser(user).subscribe(
          (res: any) => {
            console.log(res);
            this.storageService.setUser({ id: res.id, email: res.name });
            this.setLoggedInUserType(UserType.APP_USER);
            this.navigateToRentals();
          },
          (err) => {
            console.error(err);
            alert('Unable to login, try again');
          }
        );
      } else {
        this.apiService.createUser(user).subscribe(
          (res) => {
            this.authForm.reset();
            alert('Registration  successful, please login to continue');
            this.currentAuthMode = this.authType.login;
          },
          (err) => {
            console.error(err);
            alert('Unable to register, try again');
          }
        );
      }
    }
  }

  get isLoggedInAsGuest() {
    return this.storageService.storedUserType === UserType.GUEST;
  }
}
