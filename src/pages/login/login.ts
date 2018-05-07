import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import axios from 'axios';
import cors from 'cors';
import { LoginserviceProvider } from "../../providers/loginservice/loginservice";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginserviceProvider]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginservice: LoginserviceProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  loginGoogle() {
    axios.get("http://localhost:3000/users/5af07f9d6bd5cc294cb6e402")
      .then((res) => {
        this.loginservice.login();
        this.loginservice.userProfile = res.data;
        console.log("Login service", this.loginservice);
        this.navCtrl.push(ProfilePage, res.data);
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.stack);
      });
  }

  loginFacebook() {}
  loginTwitter() {}
}
