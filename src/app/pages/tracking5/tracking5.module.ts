import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking5PageRoutingModule } from './tracking5-routing.module';

import { Tracking5Page } from './tracking5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking5PageRoutingModule
  ],
  declarations: [Tracking5Page]
})
export class Tracking5PageModule {}
