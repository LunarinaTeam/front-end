import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking4Page } from './tracking4.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking4PageRoutingModule {}
