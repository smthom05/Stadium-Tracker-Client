// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginserviceProvider {

  isLoggedIn: boolean = false;
  userProfile: any;

  constructor() {
  }

  login() {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

}
