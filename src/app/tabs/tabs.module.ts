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

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    HomeComponent,
    ExploreComponent,
    NavigateComponent,
    CartComponent,
    ProfileComponent,
    TabsPage
  ]
})
export class TabsPageModule { }
