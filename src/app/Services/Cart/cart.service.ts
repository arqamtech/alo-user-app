import { Injectable } from '@angular/core';
import { LoginGGuard } from 'src/app/Guards/login-g.guard';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  userId = this.authService.getUid();

  cartRef = this.db.list(`User Data/User Cart/${this.userId}/Products`);
  cartValueRef = this.db.object(`User Data/User Cart/${this.userId}/CartValue`);

  constructor(
    public db: AngularFireDatabase,
    public authService: LoginGGuard,
  ) { }


  getCartValue() {
    return this.cartValueRef.valueChanges();
  }



}
