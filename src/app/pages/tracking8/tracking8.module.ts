import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tracking8PageRoutingModule } from './tracking8-routing.module';

import { Tracking8Page } from './tracking8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tracking8PageRoutingModule
  ],
  declarations: [Tracking8Page]
})
export class Tracking8PageModule {}
