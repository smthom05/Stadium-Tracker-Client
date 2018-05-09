import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../../../../profile/profile';
import axios from 'axios';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  checkinId: string;
  locationName: string;
  date: string;
  photo: string;
  moreInfo: string;
  homeTeam: string;
  homeTeamScore: number;
  awayTeam: string;
  awayTeamScore: number;
  gameHistory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkinId = navParams.get('checkinId');
    this.locationName = navParams.get('locationName');
    this.photo = navParams.get('photo');
    this.awayTeam = navParams.get('awayTeam');
    this.homeTeam = navParams.get('homeTeam');
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    console.log('Checkin id from navParams', this.checkinId);
  }
  updateCheckIn() {
    let updatedInfo = {
      location: this.locationName,
      teams: [
        {
          name: this.homeTeam,
          score: this.homeTeamScore
        },
        {
          name: this.awayTeam,
          score: this.awayTeamScore
        }
      ],
      date: this.date,
      photo: this.photo,
      moreInfo: this.moreInfo
    }

    axios.get("http://localhost:3000/users/5af07f9d6bd5cc294cb6e402/history")
      .then((res) => {
        this.gameHistory = res.data;

        if (this.gameHistory.length > 1) {
         this.gameHistory.splice(this.gameHistory.length-1,1,updatedInfo);
        } else {
          this.gameHistory = [updatedInfo];
        }
        axios.post('http://localhost:3000/users/5af07f9d6bd5cc294cb6e402/update/history/' + this.checkinId, this.gameHistory)
          .then((res) => {
            console.log('Returned info', res.data);
            this.navCtrl.push(ProfilePage);
          })
          .catch((err) => {
            console.log(err.message, err.stack);
          }
          );
      })
      .catch((err) => {
        console.log(err.message, err.stack);
      }
      );
  }
}
