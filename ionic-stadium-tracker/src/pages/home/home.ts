import { Component, AfterViewInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';
import { LocationPage } from './location/location';
import leaflet from 'leaflet';
import axios from 'axios';


// LocationPage: LocationPage;
let corner1 = leaflet.latLng(23.500, -125.230),
corner2 = leaflet.latLng(49.923,-67.661),
bounds = leaflet.latLngBounds(corner1, corner2);


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {

  }

  onInput(event){
  // TODO: Add axios get call for searched data
 }

  ionViewDidLoad() {
    this.loadmap();
  }

  loadmap() {
    this.map = leaflet.map("map").fitBounds(bounds);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map
    // .locate({
    //   setView: true,
    //   maxZoom: 10
    // })
    .on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })

  }

  goToLocationPage() {
      axios.get("http://localhost:3000/locations/5aea650ce0e5a69ac55a19af")
        .then(res => {
          console.log(res);
          this.navCtrl.push(LocationPage, res.data);
        })
    };

}
