import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking1PageRoutingModule } from './tracking1-routing.module';

import { Tracking1Page } from './tracking1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking1PageRoutingModule
  ],
  declarations: [Tracking1Page]
})
export class Tracking1PageModule {}
