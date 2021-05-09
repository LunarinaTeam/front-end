import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskfortrackingPage } from './askfortracking.page';

const routes: Routes = [
  {
    path: '',
    component: AskfortrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskfortrackingPageRoutingModule {}
