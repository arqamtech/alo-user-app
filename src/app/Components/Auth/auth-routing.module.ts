import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSplashComponent } from './login-splash/login-splash.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-splash',
    pathMatch: 'full',
  },
  {
    path: 'login-splash',
    component: LoginSplashComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
