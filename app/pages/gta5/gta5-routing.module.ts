import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gta5Page } from './gta5.page';

const routes: Routes = [
  {
    path: '',
    component: Gta5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gta5PageRoutingModule {}
