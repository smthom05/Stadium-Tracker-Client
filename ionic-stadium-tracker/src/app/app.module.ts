import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SocialPage } from '../pages/social/social';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/location/location';
import { CheckInPage } from '../pages/location/check-in/check-in';
import { SettingsPage } from '../pages/profile/settings/settings';
import { AddFriendPage } from '../pages/social/add-friend/add-friend';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SocialPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LocationPage,
    CheckInPage,
    SettingsPage,
    AddFriendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SocialPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LocationPage,
    CheckInPage,
    SettingsPage,
    AddFriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
