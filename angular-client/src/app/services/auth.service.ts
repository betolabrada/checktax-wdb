import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiService } from './api/api.service';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  loggedInChanged = new Subject<boolean>();
  currentUser: Observable<User>;
  currentUserSubject: BehaviorSubject<User>;
  constructor(private api: ApiService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username?: string, password?: string) {
    return this.api.post<any>(`/login`, { username, password })
      .pipe(map(res => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const user: User = {
          username,
          token: res.data
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loggedIn = true;
        this.loggedInChanged.next(this.loggedIn);
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
    this.loggedInChanged.next(this.loggedIn);
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
}
