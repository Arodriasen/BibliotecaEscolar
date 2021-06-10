import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.page.html',
  styleUrls: ['./modal-tarea.page.scss'],
})
export class ModalTareaPage implements OnInit {

  constructor(public viewCtr: ModalController) { }

  ngOnInit() {
  }

  dismissModalTarea(){
    this.viewCtr.dismiss();
  }

}
