import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SocialPage } from '../pages/social/social';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/home/location/location';
import { CheckInPage } from '../pages/home/location/check-in/check-in';
import { SettingsPage } from '../pages/profile/settings/settings';
import { AddFriendPage } from '../pages/social/add-friend/add-friend';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    GoogleMapsProvider,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
