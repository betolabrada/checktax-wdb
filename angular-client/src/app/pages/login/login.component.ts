import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // redirect to home if already logged in
    console.log(this.authService.currentUserValue);
    if (this.authService.currentUserValue) {
      console.log('aqui ?');
      this.authService.changeLoggedIn(true);
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          this.loading = false;
          this.router.navigate(['/home']);
        },
        error: error => {
          console.log(error);
          this.error = error.error?.msg;
        }
      });
  }
}
