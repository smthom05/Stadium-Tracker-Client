import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationPage } from './location/location';

// LocationPage: LocationPage;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToLocationPage() {
    this.navCtrl.push(LocationPage);
  };

}
