import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestSlidePage } from './app-preview.page';

const routes: Routes = [
  {
    path: '',
    component: TestSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestSlidePageRoutingModule {}
