import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDeUsuarioPage } from './perfil-de-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDeUsuarioPageRoutingModule {}
