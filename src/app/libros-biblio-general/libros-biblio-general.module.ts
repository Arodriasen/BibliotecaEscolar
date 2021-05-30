import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrosBiblioGeneralPageRoutingModule } from './libros-biblio-general-routing.module';

import { LibrosBiblioGeneralPage } from './libros-biblio-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrosBiblioGeneralPageRoutingModule
  ],
  declarations: [LibrosBiblioGeneralPage]
})
export class LibrosBiblioGeneralPageModule {}
