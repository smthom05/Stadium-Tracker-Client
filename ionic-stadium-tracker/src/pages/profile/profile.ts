import { Component, AfterViewInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { SettingsPage } from './settings/settings';
import axios from 'axios';


let currentUser = {
  firstName: 'Michael',
  lastName: 'Bolens',
  fullName: this.firstName + this.lastName,
  favoriteTeam: 1,
  gameHistory: [
    {
      location: 'Milwaukee',
      teams: [
        {
          name: 'Brewers',
          score: 8
        },
        {
          name: 'Rockies',
          score: 3
        }
      ],
      moreInfo: 'I liked it',
    }
  ],
  settings: {
    incognito: false
  },
  friends: [2],
  userImage: 'http://via.placeholder.com/150x150'
}

// SettingsPage: SettingsPage;

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements AfterViewInit {
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) { };

  ngAfterViewInit(){
    this.getLocationImage(currentUser.favoriteTeam)
  }

  goToSettingsPage() {
    this.navCtrl.push(SettingsPage);
  };

  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  };

  // TODO: Rewrite as axios get to database
  getLocationImage(locationId) {
    // axios.get("/" + locationId)
    //   .then(res => {
    //     console.log(res.data);
    //   })
  }
};
