import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from './details/details';

import moment  from 'moment';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
})
export class CheckInPage {
  locationPhoto:string;
  name:string;
  homeTeam:string;
  nextEvent:any;
  facts:any;
  recommendations:any;
  opponentName:string;
  ticketLink:string;
  date:string;
  checkInDetails:any;
  gameHistory:any;
  checkinId:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locationPhoto = navParams.get('locationPhoto');
    this.name = navParams.get('name');
    this.homeTeam = navParams.get('team');
    this.nextEvent = navParams.get('nextEvent');
    this.facts = navParams.get('facts');
    this.recommendations = navParams.get('recommendations');
    this.opponentName = navParams.get('nextEvent.opponentName');
    this.ticketLink = navParams.get('nextEvent.ticketLink');
    this.date = moment(this.nextEvent.date).format('MMM Do @ h:mmA');
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    this.checkIn();
  }
  getCurrentHistory() {
    this.checkInDetails = {
      location: this.name,
      date: moment(Date.now()).format('MMM Do @ h:mmA'),
      teams: [],
      photo: "",
      moreInfo: ""
    }

    axios.get('http://localhost:3000/users/5af07f9d6bd5cc294cb6e402/history')
      .then((res) => {
        console.log('Current game history', res.data);
        this.gameHistory = res.data;
        this.gameHistory.push(this.checkInDetails);
        // console.log('New game history', gameHistory);
        this.addCheckIn();
      })
      .catch((err) => {
        console.log(err.message, err.stack);
      }
    );
  }
  addCheckIn() {
    console.log(this.gameHistory);
    axios.post('http://localhost:3000/users/5af07f9d6bd5cc294cb6e402/update/history', this.gameHistory)
      .then((res) => {
        let lastIndex = res.data.length - 1;
        console.log('User with updated history', res.data);
        this.checkinId = res.data[lastIndex]._id;
        console.log('Checkin id', this.checkinId);
      }).catch((err) => {
        console.log(err.message, err.stack);
      }
    );
  }
  checkIn() {
    this.getCurrentHistory();
  }

  goToDetailsPage() {
    this.navCtrl.push(DetailsPage, {
      checkinId: this.checkinId,
      locationName: this.name,
      awayTeam: this.nextEvent.opponentName,
      homeTeam: this.homeTeam,
      photo: this.locationPhoto
    });
  }

}
