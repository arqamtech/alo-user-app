import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  phone: number;
  otp: number;

  confirmR: any;

  isLoading1: boolean = false;
  isLoading2: boolean = false;

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
    this.slides.lockSwipes(true);
  }


  checkPhone() {
    let tempNum = this.phone.toString();
    if (tempNum.length == 10) {
      this.signIn()
    } else {
      this.presentToast("Enter a valid Phone Number");
    }
  }


  signIn() {
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+91" + this.phone;
    this.isLoading1 = true;
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then(confirmationResult => {
        this.confirmR = confirmationResult;
      }).then(() => {
        this.gtSecond();
        this.isLoading1 = false;
      }).catch(function (error) {
        var msg = error.message;
        this.presentToast(msg);
      });

  }

  checkOtp() {
    let tempNum = this.otp.toString();
    if (tempNum.length == 6) {
      this.VerifyOTP();
    } else {
      this.presentToast("Enter  avlid OTP");
    }
  }


  VerifyOTP() {
    this.isLoading2 = true;
    this.confirmR.confirm(this.otp.toString()).then(() => {
      this.isLoading2 = false;
      this.navCtrl.navigateRoot("/tabs");
    }).catch(function (error) {
      this.presentToast(error.message);
    });

  }




  gtSecond() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 500);
    this.slides.lockSwipes(true);
  }
  gtFirst() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 500);
    this.slides.lockSwipes(true);
  }


  //Toast Function
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom",
      showCloseButton: false,
    });
    toast.present();
  }

}
