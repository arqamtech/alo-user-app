import { Component, OnInit } from '@angular/core';
import { LoginGGuard } from 'src/app/Guards/login-g.guard';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user;
  constructor(
    public loginService: LoginGGuard,
    public navCtrl: NavController,
  ) {
    this.loginService.getUser().then((res) => {
      this.user = res;
    });

  }

  ngOnInit() {
  }


  gtOrders() {
    this.navCtrl.navigateForward('/tabs/profile/y-orders');
  }
  gtContactUs() {
    this.navCtrl.navigateForward('/tabs/profile/contact-us');
  }
  gtFaqs() {
    this.navCtrl.navigateForward('/tabs/profile/faqs');
  }


  signOut() {
    this.loginService.confirmSignout();
  }
}
