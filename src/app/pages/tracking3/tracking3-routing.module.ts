import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking3Page } from './tracking3.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking3PageRoutingModule {}
