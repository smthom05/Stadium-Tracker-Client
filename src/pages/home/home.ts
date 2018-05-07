import { Component, AfterViewInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';
import { LocationPage } from './location/location';
import leaflet from 'leaflet';
import moment from 'moment';
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
  locations: any;
  selectedLocation: any;
  isLocationSelected: boolean = false;
  constructor(public navCtrl: NavController) {

  }

  onInput(event){
  // TODO: Add axios get call for searched data
 }

  ionViewDidLoad() {
    this.getLocations();
  }

  loadmap() {
    let markerGroup = leaflet.featureGroup();
    this.map = leaflet.map("map")
      .on('load', (e) => {
        console.log('Map loaded, populating locations...');
        console.log('Sample location', this.locations[0]);
        this.locations.forEach((location, index) => {
          let date = moment(location.nextEvent.date).format('MMM Do @ h:mmA')
          let marker: any = leaflet.marker([location.coordinates.lat, location.coordinates.lon])
            .bindPopup(
              `
              <span class="text--bold">${location.name}</span>
              <br />
              <br />
              <span class="text--bold">Next game:</span>
              <br />
              ${date}
              <br />
              ${location.team} vs. ${location.nextEvent.opponentName}
              `
            )
            .openPopup()
            .on('popupopen', (popup) => {
              this.selectedLocation = location;
              this.isLocationSelected = true;
            })
            .on('popupclose', (popup) => {
              this.selectedLocation = {};
              this.isLocationSelected = false;
            });

          markerGroup.addLayer(marker);
        });
      })
      .addLayer(markerGroup)
      .fitBounds(bounds);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map
      .on('locationfound', (e) => {

      })
      .on('locationerror', (err) => {
        console.log(err.message);
        console.log(err.stack);
      });
  }
  getLocations() {
    axios.get("http://localhost:3000/locations")
    .then((res) => {
      this.locations = res.data;
      this.loadmap();
    })
    .catch((err) => {
      console.log(err.message);
      console.log(err.stack);
    });
  }
  goToLocationPage() {
    axios.get("http://localhost:3000/locations/" + this.selectedLocation._id)
    .then(res => {
      console.log(res);
      this.navCtrl.push(LocationPage, res.data);
    })
    .catch((err) => {
      console.log(err.message);
      console.log(err.stack);
    });
  }

}
