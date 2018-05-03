import { Component } from '@angular/core';

import { SocialPage } from '../social/social';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = HomePage;
  tab3Root = SocialPage;

  constructor() {

  }
}
