import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking9PageRoutingModule } from './tracking9-routing.module';

import { Tracking9Page } from './tracking9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking9PageRoutingModule
  ],
  declarations: [Tracking9Page]
})
export class Tracking9PageModule {}
