import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosBiblioGeneralPage } from './libros-biblio-general.page';

const routes: Routes = [
  {
    path: '',
    component: LibrosBiblioGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosBiblioGeneralPageRoutingModule {}
