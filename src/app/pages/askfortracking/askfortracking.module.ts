import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskfortrackingPageRoutingModule } from './askfortracking-routing.module';

import { AskfortrackingPage } from './askfortracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskfortrackingPageRoutingModule
  ],
  declarations: [AskfortrackingPage]
})
export class AskfortrackingPageModule {}
