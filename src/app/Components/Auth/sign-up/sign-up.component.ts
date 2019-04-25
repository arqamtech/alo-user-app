import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  name: string;
  email: string;
  phone: string;

  isLoading1: boolean = false;


  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
  ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.phone = user.phoneNumber
      }
    })
  }

  ngOnInit() {
  }


  checkData() {
    if (this.name) {
      if (this.email) {
        this.dataEnter();
      } else {
        this.presentToast("Enter email Id");
      }
    } else {
      this.presentToast("Enter your Name");
    }
  }



  dataEnter() {
    this.isLoading1 = true;
    firebase.database().ref("User Data/Users").child(firebase.auth().currentUser.uid).set({
      Name: this.name,
      Email: this.email,
      Phone: this.phone,
    }).then(() => {
      this.isLoading1 = false;
      this.navCtrl.navigateRoot('/tabs');
    })

  }



  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "top",
      duration: 4000,
      showCloseButton: false,
    });
    await toast.present();
  }

}
