import { Component, ViewChild, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/Home/home.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  banners: Array<any> = [];
  cats: Array<any> = [];

  constructor(
    public homeService: HomeService,
  ) { }

  ngOnInit() {
    // this.slides.startAutoplay();


    this.homeService.getBanners().then((res) => {
      let tempArr: any = res;
      this.banners = tempArr;
    })
    this.homeService.getCats().then((res) => {
      let tempArr: any = res;
      this.cats = tempArr;
    })
  }

}
