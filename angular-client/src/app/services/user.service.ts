import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  permissions: [];
  editingUser: Observable<User>;
  editingUserSubject: BehaviorSubject<User>;
  constructor(private api: ApiService,
              private authService: AuthService) {
    this.editingUserSubject = new BehaviorSubject<User>(this.authService.currentUserValue);
    this.editingUser = this.editingUserSubject.asObservable();
  }

  getPermissions(username: string) {
    return this.api.get(`/getUser/${username}/permissions`)
      .pipe(map(res => {
        console.log(res);
      }));
  }

  setPermissions(username: string, permissions: {}) {
    return this.api.post(`/${username}/permissions`, {
      permissions
    });
  }
}
