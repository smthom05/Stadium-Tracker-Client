import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-activity-feed',
  templateUrl: 'activity-feed.html',
})
export class ActivityFeedPage {
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityFeedPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
