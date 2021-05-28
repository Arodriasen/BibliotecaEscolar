import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaPersonalPage } from './biblioteca-personal.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaPersonalPageRoutingModule {}
