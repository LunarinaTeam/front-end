import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSlidePageRoutingModule } from './app-preview-routing.module';

import { TestSlidePage } from './app-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestSlidePageRoutingModule
  ],
  declarations: [TestSlidePage]
})
export class TestSlidePageModule {}
