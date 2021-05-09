import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking7PageRoutingModule } from './tracking7-routing.module';

import { Tracking7Page } from './tracking7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking7PageRoutingModule
  ],
  declarations: [Tracking7Page]
})
export class Tracking7PageModule {}
