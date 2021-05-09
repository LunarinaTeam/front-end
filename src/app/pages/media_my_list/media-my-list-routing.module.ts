import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaMyListPage } from './media-my-list.page';

const routes: Routes = [
  {
    path: '',
    component: MediaMyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaMyListPageRoutingModule {}
