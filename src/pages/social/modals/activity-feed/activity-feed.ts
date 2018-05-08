import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-activity-feed',
  templateUrl: 'activity-feed.html',
})
export class ActivityFeedPage {
  hasActivities: boolean = false;
  activities: any;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityFeedPage');
    this.getPublicActivity();
  }

  getPublicActivity() {
    axios.get('http://localhost:3000/activity')
      .then((res) => {
        if (res.data) {
          this.activities = res.data;
          this.hasActivities = true;
        }

        console.log('Recent activities', this.activities);
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
