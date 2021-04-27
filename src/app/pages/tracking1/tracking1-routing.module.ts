import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tracking1Page } from './tracking1.page';

const routes: Routes = [
  {
    path: '',
    component: Tracking1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tracking1PageRoutingModule {}
