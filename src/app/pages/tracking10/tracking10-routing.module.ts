import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking10Page } from './tracking10.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking10PageRoutingModule {}
