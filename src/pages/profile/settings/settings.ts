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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.getIncognitoStatus();
  }

  getIncognitoStatus() {
    axios.get("http://localhost:3000/users/5aedf8a81bcf9e07d46c0687")
    .then(res => {
      this.incognito = res.data.settings.incognito;
    })
  }

  goIncognito() {
    axios.post("http://localhost:3000/users/5aedf8a81bcf9e07d46c0687/update", {
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
