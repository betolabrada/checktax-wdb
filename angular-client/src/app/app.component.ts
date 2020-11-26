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

  loggedIn = false;
  loggedInSubscription: Subscription;
  constructor(private authService: AuthService,
              private router: Router,
              private numberFormatter: NumberFormatterService) {}

  ngOnInit(): void {
    console.log(this.numberFormatter.format(169393939));
    this.loggedIn = this.authService.loggedIn;
    this.loggedInSubscription = this.authService.loggedInChanged
      .subscribe(
        (loggedIn) => {
          this.loggedIn = loggedIn;
        }
      );
  }

  async onLogout() {
    this.authService.logout();
    await this.router.navigate(['/']);
  }

}
