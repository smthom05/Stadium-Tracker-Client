import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {
  ranks: any;
  league: string;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    this.league = 'All';
    this.getLeaderboardStats();
  }

  getLeaderboardStats() {
    axios.get('http://localhost:3000/leaderboard/baseball')
      .then((res) => {
        this.ranks = res.data;
        console.log('Rankings', this.ranks);
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
