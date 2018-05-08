import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import axios from 'axios';
import { ProfilePage } from '../profile';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  incognito:boolean;
  userSettings: string = 'sessionStatus';
  loginStorage:any = window.localStorage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signout() {
    this.loginStorage.removeItem('isLoggedIn');
    this.loginStorage.removeItem('userProfile');
    this.navCtrl.setRoot(ProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.getIncognitoStatus();
  }

  getIncognitoStatus() {
    axios.get("http://localhost:3000/users/5af07f9d6bd5cc294cb6e402")
    .then(res => {
      this.incognito = res.data.settings.incognito;
    })
  }

  goIncognito() {
    axios.post("http://localhost:3000/users/5af07f9d6bd5cc294cb6e402/update", {
      settings: {
        incognito: this.incognito
      }
    })
      .then(res => {
        // this.navCtrl.push(ProfilePage, res.data);
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.stack);
      });
    }
}
