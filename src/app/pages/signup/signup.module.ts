import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSlidePageRoutingModule } from './signup-routing.module';

import { TestSlidePage } from './signup.page';

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
