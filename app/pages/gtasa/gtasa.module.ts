import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GtasaPageRoutingModule } from './gtasa-routing.module';

import { GtasaPage } from './gtasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GtasaPageRoutingModule
  ],
  declarations: [GtasaPage]
})
export class GtasaPageModule {}
