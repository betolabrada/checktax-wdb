import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NumberFormatterService } from './services/number-formatter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-client';
  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
  }

  get loggedIn(): boolean {
    return !!this.authService.currentUserValue;
  }

  async onLogout() {
    this.authService.logout();
    await this.router.navigate(['/']);
  }

}
