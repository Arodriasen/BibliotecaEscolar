import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  libros = []

  constructor(
    private http: HttpClient,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.http.get<any>('https://www.etnassoft.com/api/v1/get/?results_range=0,20').subscribe(res => {
      console.log(res)
      this.libros = res;
      console.log(this.libros)
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}


