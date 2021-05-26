import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaColegioPage } from './biblioteca-colegio.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaColegioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaColegioPageRoutingModule {}
