import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(
    public modalCtrl: ModalController
  ) {

  }

  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  }
}
