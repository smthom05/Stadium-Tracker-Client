import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location-stats',
  templateUrl: 'location-stats.html',
})
export class LocationStatsPage {
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationStatsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
