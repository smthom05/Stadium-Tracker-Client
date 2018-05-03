import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityFeedPage } from './activity-feed';

@NgModule({
  declarations: [
    ActivityFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityFeedPage),
  ],
})
export class ActivityFeedPageModule {}
