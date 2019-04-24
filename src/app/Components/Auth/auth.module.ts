import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginSplashComponent } from './login-splash/login-splash.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../UI/loader/loader.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginSplashComponent,
    SignUpComponent,
    LoaderComponent,
  ],
  entryComponents: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule.forRoot(),
    FormsModule,

  ],
  providers: [

  ]
})
export class AuthModule { }
