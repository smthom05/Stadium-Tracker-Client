import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckInPage } from './check-in/check-in';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

locationPhoto:string;
name:string;
nextEvent:any;
facts:any;
recommendations: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locationPhoto = navParams.get('locationPhoto');
    this.name = navParams.get('name');
    this.nextEvent = navParams.get('nextEvent');
    this.facts = navParams.get('facts');
    this.recommendations = navParams.get('recommendations');

  }

  ionViewDidLoad() {
    console.log(this.navParams);
  }

  goToCheckInPage() {
    this.navCtrl.push(CheckInPage);
  }

}
