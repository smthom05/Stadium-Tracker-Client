import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import axios from 'axios';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  gameHistory:any;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HistoryPage');
    this.getGameHistory();
  }

  getGameHistory() {
    axios.get('http://localhost:3000/users/5aede8f882699f1572c7948f/history')
      .then((res) => {
        this.gameHistory = res.data;
        console.log('Game history', this.gameHistory);
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
