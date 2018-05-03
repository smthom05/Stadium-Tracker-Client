import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personal-stats',
  templateUrl: 'personal-stats.html',
})
export class PersonalStatsPage {
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalStatsPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
