import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ToastController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LoginGGuard implements CanActivate {

  constructor(
    private router: Router,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase,
    public alertCtrl: AlertController,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/auth']);
          this.presentToast("You are not Logged in");
          resolve(false);
        }
      });
    });

  }


  getUid() {
    return firebase.auth().currentUser.uid;
  }

  getUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {

          this.db.object(`User Data/Users/${user.uid}`).valueChanges().subscribe(snap => {
            let temp: any = snap;
            resolve(temp)
          });
        }
      });
    });

  }

  async confirmSignout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm logout ? ',
      buttons: [
        {
          text: 'No, Its a mistake',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Logout',
          handler: () => {
            this.signOut();
          }
        }
      ]
    });
    await alert.present();
  }


  signOut() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['/auth']);
    })
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