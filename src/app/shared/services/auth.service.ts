import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User = new User();
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  private readonly keyStorage = 'user';

  constructor(private router: Router) {
    this.getUser();
  }

  getProfile$() {
    return this.user$.asObservable();
  }

  login(user: User) {
    this.user = user;
    this.user.isLogged = true;
    this.user.isAdmin = true;
    this.updateUser(this.user);
  }

  logout(autoLogout: boolean = false) {
    localStorage.removeItem(this.keyStorage);
    this.user = new User();
    if (!autoLogout) this.user$.next(this.user);
    else this.router.navigate(['/public']);
  }

  updateUser(user: User) {
    localStorage.setItem(this.keyStorage, JSON.stringify(user));
    this.user$.next(user);
  }

  private getUser() {
    const userLocalStorage = localStorage.getItem(this.keyStorage);
    if (userLocalStorage) {
      this.user$.next(JSON.parse(userLocalStorage));
    }
  }
}
