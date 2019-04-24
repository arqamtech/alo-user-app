import { Component, OnInit } from '@angular/core';
import { LoginGGuard } from 'src/app/Guards/login-g.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  uid = this.getUid.getUid();

  constructor(
    public getUid: LoginGGuard,
  ) {
    console.log(this.uid);
  }

  ngOnInit() {
  }

}
