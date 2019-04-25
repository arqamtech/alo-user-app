import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  faqs: Array<any> = []

  constructor(
    public db: AngularFireDatabase,
  ) {
    this.getFaqs();
  }

  ngOnInit() { }


  getFaqs() {
    this.db.list(`Promotionals/FAQs/UserFaq`).snapshotChanges().subscribe(snap => {
      this.faqs = [];
      snap.forEach(snip => {
        var temp: any = snip.payload.val();
        temp.key = snip.key;
        this.faqs.push(temp);
      })
    })

  }


}
