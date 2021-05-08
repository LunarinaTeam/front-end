import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking8Page } from './tracking8.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking8PageRoutingModule {}
