import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckInPage } from './check-in/check-in';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  locationPhoto:string;
  name:string;
  homeTeam:string;
  nextEvent:any;
  facts:any;
  recommendations:any;
  opponentName:string;
  ticketLink:string;
  date:string;

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
  }

  goToCheckInPage() {
    this.navCtrl.push(CheckInPage, this.navParams);
  }

}
