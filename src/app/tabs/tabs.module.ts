import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomeComponent } from '../Components/MainTabs/home/home.component';
import { NavigateComponent } from '../Components/MainTabs/navigate/navigate.component';
import { ExploreComponent } from '../Components/MainTabs/explore/explore.component';
import { CartComponent } from '../Components/MainTabs/cart/cart.component';
import { ProfileComponent } from '../Components/MainTabs/profile/profile.component';
import { YourOrdersComponent } from '../Components/ProfilePages/your-orders/your-orders.component';
import { ContactUsComponent } from '../Components/ProfilePages/contact-us/contact-us.component';
import { FaqsComponent } from '../Components/ProfilePages/faqs/faqs.component';
import { LoaderComponent } from '../Components/UI/loader/loader.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    HomeComponent,
    LoaderComponent,
    ExploreComponent,
    NavigateComponent,
    CartComponent,
    ProfileComponent,
    TabsPage,
    YourOrdersComponent,
    ContactUsComponent,
    FaqsComponent,
  ]
})
export class TabsPageModule { }
