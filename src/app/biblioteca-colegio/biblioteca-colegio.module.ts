import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaColegioPageRoutingModule } from './biblioteca-colegio-routing.module';

import { BibliotecaColegioPage } from './biblioteca-colegio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaColegioPageRoutingModule
  ],
  declarations: [BibliotecaColegioPage]
})
export class BibliotecaColegioPageModule {}
