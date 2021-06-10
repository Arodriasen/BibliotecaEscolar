import { ModalTareaPage } from './../modal-tarea/modal-tarea.page';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-biblioteca-personal',
  templateUrl: './biblioteca-personal.page.html',
  styleUrls: ['./biblioteca-personal.page.scss'],
})
export class BibliotecaPersonalPage implements OnInit {
  libros = []

  constructor(
    private http: HttpClient,
    public modalController: ModalController
  ) { }

  ngOnInit() {
      this.http.get<any>('https://www.etnassoft.com/api/v1/get/?results_range=0,3').subscribe(res => {
      console.log(res)
      this.libros = res;
      console.log(this.libros)
    })
  }

  async presentModalTarea() {
    const modal = await this.modalController.create({
      component: ModalTareaPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
