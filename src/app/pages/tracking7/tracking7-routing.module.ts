import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking7Page } from './tracking7.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking7PageRoutingModule {}
