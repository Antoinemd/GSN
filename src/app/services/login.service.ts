import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isUserLoggedIn = false;
  private username;


  constructor() { 
    // this.isUserLoggedIn = false;
  }
  
  setUserLoggedIn():void {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    console.log('utilisateur loged:', this.isUserLoggedIn);
    return this.isUserLoggedIn;
  }

}
