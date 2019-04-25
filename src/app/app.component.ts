import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public db: AngularFireDatabase,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.db.object(`User Data/Users/${user.uid}`).snapshotChanges().subscribe(snap => {
            if (snap.payload.exists()) {
              this.router.navigate(['/tabs']);
            } else {
              this.router.navigate(['/auth/sign-up']);
            }
          })
        } else {
          this.router.navigate(['/auth']);
        }
      })


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
