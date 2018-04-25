import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fun-stuff',
  templateUrl: 'fun-stuff.html',
})
export class FunStuffPage {
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FunStuffPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
