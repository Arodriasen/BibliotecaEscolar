import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPersonalPageRoutingModule } from './biblioteca-personal-routing.module';

import { BibliotecaPersonalPage } from './biblioteca-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPersonalPageRoutingModule
  ],
  declarations: [BibliotecaPersonalPage]
})
export class BibliotecaPersonalPageModule {}
