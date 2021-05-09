import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsercirclePageRoutingModule } from './usercircle-routing.module';

import { UsercirclePage } from './usercircle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsercirclePageRoutingModule
  ],
  declarations: [UsercirclePage]
})
export class UsercirclePageModule {}
