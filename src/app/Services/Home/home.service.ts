import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  bannersRef = this.db.list('Promotionals/Banners', ref => ref.orderByChild("TimeStamp"));
  catRef = this.db.list('Categories');

  constructor(
    private db: AngularFireDatabase,
  ) {

  }


  getBanners() {
    let bProm = new Promise((resolve, reject) => {
      this.bannersRef.snapshotChanges().subscribe(snap => {
        let banners: Array<any> = [];
        snap.forEach(snp => {
          let temp: any = snp.payload.val();
          temp.key = snp.key;
          banners.push(temp)
        })
        resolve(banners)
      })
    });
    return bProm;
  }


  getCats() {
    let cProm = new Promise((resolve, reject) => {
      this.catRef.snapshotChanges().subscribe(snap => {
        let cats = [];
        snap.forEach(snp => {
          let temp: any = snp.payload.val();
          temp.key = snp.key;
          cats.push(temp)
        })
        resolve(cats)
      });
    });
    return cProm;

  }


}
