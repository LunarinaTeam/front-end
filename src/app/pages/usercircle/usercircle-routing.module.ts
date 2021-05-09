import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsercirclePage } from './usercircle.page';

const routes: Routes = [
  {
    path: '',
    component: UsercirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsercirclePageRoutingModule {}
