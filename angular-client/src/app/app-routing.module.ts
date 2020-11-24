import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ConfigPage } from './pages/config/config.page';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'config',
    component: ConfigPage
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
