import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDeUsuarioPageRoutingModule } from './perfil-de-usuario-routing.module';

import { PerfilDeUsuarioPage } from './perfil-de-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDeUsuarioPageRoutingModule
  ],
  declarations: [PerfilDeUsuarioPage]
})
export class PerfilDeUsuarioPageModule {}
