import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaMyListPageRoutingModule } from './media-my-list-routing.module';

import { MediaMyListPage } from './media-my-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaMyListPageRoutingModule
  ],
  declarations: [MediaMyListPage]
})
export class MediaMyListPageModule {}
