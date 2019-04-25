import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/Cart/cart.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  loading1: boolean = true;
  cartValue: number = 0;

  items: Array<any> = [];

  constructor(
    public cartService: CartService,
    public db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getCartVal();
  }


  getCartVal() {
    return this.cartService.getCartValue().subscribe(snap => {
      this.cartValue = +snap;
    })
  }

  getCart() {
    return this.cartService.cartRef.snapshotChanges().subscribe(snap => {
      this.items = [];
      snap.forEach(snip => {
        let temp: any;
        this.db.object(`Products/${snip.key}`).snapshotChanges().subscribe(isnap => {
          temp = isnap.payload.val();
          temp.key = isnap.key;
          temp.Quantity = snip.payload.val();
          console.log(temp)
          this.items.push(temp);
          this.loading1 = false;
        })
      })
    })
  }

}
