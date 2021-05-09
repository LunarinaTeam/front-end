import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking3PageRoutingModule } from './tracking3-routing.module';

import { Tracking3Page } from './tracking3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking3PageRoutingModule
  ],
  declarations: [Tracking3Page]
})
export class Tracking3PageModule {}
