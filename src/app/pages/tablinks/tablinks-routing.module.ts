import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'tracking',
      //   loadChildren: () => import('../tracking/tracking.module').then(m => m.TrackingPageModule)
      // },
      // {
      //   path: 'circle',
      //   loadChildren: () => import('../circle/circle.module').then(m => m.CirclePageModule)
      // },
      // {
      //   path: 'media',
      //   loadChildren: () => import('../media/media.module').then(m => m.MediaPageModule)
      // },
      // {
      //   path: 'shop',
      //   loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      // },
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TablinksPageRoutingModule { }