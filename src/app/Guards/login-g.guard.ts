import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGGuard implements CanActivate {

  constructor(
    private router: Router,
    public toastCtrl: ToastController,
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