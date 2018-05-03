import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddFriendPage } from './add-friend/add-friend';

// AddFriendPage: AddFriendPage;

@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage {
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

  goToAddFriendPage() {
    this.navCtrl.push(AddFriendPage);
  }

  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  }
}
