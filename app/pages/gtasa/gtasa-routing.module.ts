import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GtasaPage } from './gtasa.page';

const routes: Routes = [
  {
    path: '',
    component: GtasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GtasaPageRoutingModule {}
