import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-splash',
  templateUrl: './login-splash.component.html',
  styleUrls: ['./login-splash.component.scss'],
})
export class LoginSplashComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }


  gtLogin() {
    this.navCtrl.navigateForward("/login")
  }
}
