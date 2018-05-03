import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalStatsPage } from './personal-stats';

@NgModule({
  declarations: [
    PersonalStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalStatsPage),
  ],
})
export class PersonalStatsPageModule {}
