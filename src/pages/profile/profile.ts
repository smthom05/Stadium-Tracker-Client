import { Component, AfterViewInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from './settings/settings';
import axios from 'axios';
import { LoginserviceProvider } from '../../providers/loginservice/loginservice';
import { LoginPage } from '../login/login';



let currentUser = {
  firstName: '',
  lastName: '',
  fullName: '',
  userImage: '',
  __v: 0,
  friends: [],
  settings: {
    incognito: false
  },
  gameHistory: [
    {
      location: 'Miller Park',
      photo: 'https://chairnerd.global.ssl.fastly.net/images/performers-landscape/milwaukee-brewers-7c4ba0/15/huge.jpg',
      teams: [
        {
          name: 'Brewers',
          score: 5
        },
        {
          name: 'Rockies',
          score: 2
        }
      ],
      date: 'Sometime this season',
      moreInfo: 'Drank beer, ate food'
    }
  ],
}

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

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loginService: LoginserviceProvider
  ) {
    this.firstName = navParams.get('firstName');
    this.lastName = navParams.get('lastName');
    this.fullName = navParams.get('fullName');
    this.userImage = navParams.get('userImage');
  };

  ngAfterViewInit() {
    // this.getLocationImage(currentUser.favoriteTeam);

    // Generate example user

  }

  ionViewDidLoad() {
    console.log("Login service", this.loginService);
    // console.log('our navparams', this.navParams);
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
  }

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
