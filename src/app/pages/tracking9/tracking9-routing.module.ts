import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking9Page } from './tracking9.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking9PageRoutingModule {}
