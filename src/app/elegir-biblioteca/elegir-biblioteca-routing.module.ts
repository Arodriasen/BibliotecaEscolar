import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirBibliotecaPage } from './elegir-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirBibliotecaPageRoutingModule {}
