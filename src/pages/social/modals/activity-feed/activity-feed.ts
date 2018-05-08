import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-activity-feed',
  templateUrl: 'activity-feed.html',
})
export class ActivityFeedPage {
  activities: any;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    this.getPublicActivity();
  }

  getPublicActivity() {
    axios.get('http://localhost:3000/activity')
      .then((res) => {
        this.activities = res.data;
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.stack);
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
