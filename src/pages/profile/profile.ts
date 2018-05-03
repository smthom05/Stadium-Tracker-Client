import { Component, AfterViewInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { SettingsPage } from './settings/settings';
import axios from 'axios';
import { LoginserviceProvider } from '../../providers/loginservice/loginservice';
import { LoginPage } from '../login/login';


let currentUser = {
  firstName: 'Scott',
  lastName: 'Thomas',
  fullName: 'Scott Thomas',
  userImage: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50',
  __v: 0,
  friends: [],
  settings: [],
  gameHistory: []
}

// SettingsPage: SettingsPage;

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [LoginserviceProvider]
})
export class ProfilePage implements AfterViewInit {
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public loginservice: LoginserviceProvider
  ) { };

  ngAfterViewInit() {
    this.getLocationImage(currentUser.favoriteTeam);

    // Generate example user
    // this.addFakeUser(currentUser);

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
  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  };

  addFakeUser(user) {
  axios.post("http://localhost:3000/users", user)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err.message, err.stack);
    })
  }
};
