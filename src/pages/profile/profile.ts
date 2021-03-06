import { Component, AfterViewInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from './settings/settings';
import axios from 'axios';
import { LoginserviceProvider } from '../../providers/loginservice/loginservice';
import { LoginPage } from '../login/login';

// SettingsPage: SettingsPage;

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [LoginserviceProvider]
})
export class ProfilePage {
  firstName:string;
  lastName:string;
  fullName:string;
  userImage:string;
  incognito:boolean;
  loginStorage:any = window.localStorage;
  isLoggedIn:boolean = false;
  userProfile:any;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loginService: LoginserviceProvider
  ) {

  };

  ionViewDidLoad() {
    if (JSON.parse(this.loginStorage.getItem('isLoggedIn'))) {
      this.isLoggedIn = JSON.parse(this.loginStorage.getItem('isLoggedIn'));
      this.userProfile = JSON.parse(this.loginStorage.getItem('userProfile'));
      this.firstName = this.userProfile.firstName;
      this.lastName = this.userProfile.lastName;
      this.fullName = this.userProfile.fullName;
      this.userImage = this.userProfile.userImage;
    } else {
      this.isLoggedIn = false;
      this.userProfile = {};
      this.firstName = "";
      this.lastName = "";
      this.fullName = "";
      this.userImage = "";
    }
    // console.log('Local: isLoggedIn', JSON.parse(this.loginStorage.getItem('isLoggedIn')));
    // console.log('Local: userProfile', JSON.parse(this.loginStorage.getItem('userProfile')));

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
    this.navCtrl.setRoot(LoginPage);
  }

};
