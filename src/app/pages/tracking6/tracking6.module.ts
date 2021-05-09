import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking6PageRoutingModule } from './tracking6-routing.module';

import { Tracking6Page } from './tracking6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking6PageRoutingModule
  ],
  declarations: [Tracking6Page]
})
export class Tracking6PageModule {}
