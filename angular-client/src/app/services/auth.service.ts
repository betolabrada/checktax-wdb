import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  loggedInChanged = new Subject<boolean>();
  constructor() { }

  logout() {
    this.loggedIn = false;
    this.loggedInChanged.next(this.loggedIn);
  }

  login() {
    this.loggedIn = true;
    this.loggedInChanged.next(this.loggedIn);
  }
}
