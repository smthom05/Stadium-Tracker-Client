import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { SettingsPage } from './settings/settings';

// SettingsPage: SettingsPage;

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ){};

  goToSettingsPage() {
    this.navCtrl.push(SettingsPage);
  };

  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  };
};
