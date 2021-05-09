import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking5Page } from './tracking5.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking5PageRoutingModule {}
