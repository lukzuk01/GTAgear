import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gta5PageRoutingModule } from './gta5-routing.module';

import { Gta5Page } from './gta5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gta5PageRoutingModule
  ],
  declarations: [Gta5Page]
})
export class Gta5PageModule {}
