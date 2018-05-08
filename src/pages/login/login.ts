import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginserviceProvider } from "../../providers/loginservice/loginservice";
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginserviceProvider]
})
export class LoginPage {
  loginStorage:any = window.localStorage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginservice: LoginserviceProvider
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  loginGoogle() {
    axios.get("http://localhost:3000/users/5af07f9d6bd5cc294cb6e402")
      .then((res) => {
        // console.log(res);
        this.loginservice.login();
        this.loginStorage.setItem('isLoggedIn', JSON.stringify(this.loginservice.isLoggedIn));
        // console.log('Local: isLoggedIn', JSON.parse(this.loginStorage.getItem('isLoggedIn')));
        this.loginStorage.setItem('userProfile', JSON.stringify(res.data));
        // console.log('Local: userProfile', JSON.parse(this.loginStorage.getItem('userProfile')));
        this.loginservice.userProfile = JSON.parse(this.loginStorage.getItem('userProfile'));
        // console.log("Login service", this.loginservice);
        this.navCtrl.setRoot(ProfilePage);
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.stack);
      });
  }

  loginFacebook() {}
  loginTwitter() {}
}
