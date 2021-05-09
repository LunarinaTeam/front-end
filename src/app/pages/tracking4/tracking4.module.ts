import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking4PageRoutingModule } from './tracking4-routing.module';

import { Tracking4Page } from './tracking4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking4PageRoutingModule
  ],
  declarations: [Tracking4Page]
})
export class Tracking4PageModule {}
