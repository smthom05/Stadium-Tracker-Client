import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationStatsPage } from './location-stats';

@NgModule({
  declarations: [
    LocationStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationStatsPage),
  ],
})
export class LocationStatsPageModule {}
