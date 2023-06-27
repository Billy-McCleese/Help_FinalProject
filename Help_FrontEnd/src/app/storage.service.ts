import { Injectable } from '@angular/core';
import { AuthUser } from './auth-user';
import { UserType } from './user-type.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private storage = localStorage;

  private _user$ = new BehaviorSubject<any>(null);
  public user$ = this._user$.asObservable();

  private _userType$ = new BehaviorSubject<any>(null);
  public userType$ = this._userType$.asObservable();

  public setUser(user: AuthUser) {
    this.storage.setItem('user', JSON.stringify(user));
    this._user$.next(user);
  }

  public get storedUser() {
    const usr = this.storage.getItem('user');
    if (usr?.trim()) {
      return JSON.parse(usr);
    }
    return {};
  }

  public setUserType(userType: UserType) {
    this.storage.setItem('ut', userType);
    this._userType$.next(userType);
  }

  public get storedUserType() {
    const usr = this.storage.getItem('ut');
    if (usr?.trim()) {
      return usr;
    }
    return null;
  }

  public wipeStorage() {
    this.storage.clear();
    this._user$.next({});
    this._userType$.next(null);
  }
}
