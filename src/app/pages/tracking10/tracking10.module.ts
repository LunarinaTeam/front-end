import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking10PageRoutingModule } from './tracking10-routing.module';

import { Tracking10Page } from './tracking10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking10PageRoutingModule
  ],
  declarations: [Tracking10Page]
})
export class Tracking10PageModule {}
