import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomeComponent } from '../Components/MainTabs/home/home.component';
import { ExploreComponent } from '../Components/MainTabs/explore/explore.component';
import { NavigateComponent } from '../Components/MainTabs/navigate/navigate.component';
import { CartComponent } from '../Components/MainTabs/cart/cart.component';
import { ProfileComponent } from '../Components/MainTabs/profile/profile.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomeComponent,
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            component: ExploreComponent
          }
        ]
      },
      {
        path: 'navigate',
        children: [
          {
            path: '',
            component: NavigateComponent,
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            component: CartComponent
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: ProfileComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
