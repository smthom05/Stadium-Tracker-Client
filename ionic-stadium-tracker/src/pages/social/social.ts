import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage {
  constructor(
    public modalCtrl: ModalController
  ) {

  }

  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  }
}
