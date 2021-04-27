import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking6Page } from './tracking6.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking6PageRoutingModule {}
