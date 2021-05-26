import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirBibliotecaPageRoutingModule } from './elegir-biblioteca-routing.module';

import { ElegirBibliotecaPage } from './elegir-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirBibliotecaPageRoutingModule
  ],
  declarations: [ElegirBibliotecaPage]
})
export class ElegirBibliotecaPageModule {}
