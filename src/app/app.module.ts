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
import { DetailsPage } from '../pages/home/location/check-in/details/details';
import { SettingsPage } from '../pages/profile/settings/settings';
import { AddFriendPage } from '../pages/social/add-friend/add-friend';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Passport } from 'passport';
import { LoginserviceProvider } from '../providers/loginservice/loginservice';

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
    AddFriendPage,
    DetailsPage,
    LoginPage
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
    AddFriendPage,
    DetailsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginserviceProvider

  ]
})
export class AppModule {}
