import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  // private userIsLogged = false;

  // indique si l'utilisateur est conecté ou non
  // un obserbale peut prendre jusqu'a 3 callback: normal data / errors / complete
  subjectUserIsLoggedIn = new Subject<boolean>();

  constructor() {
    this.subjectUserIsLoggedIn.next(false);
  }

  setUserLoggedIn(): void {
    this.subjectUserIsLoggedIn.next(true);
    // this.userIsLogged = true;
  }

  setUserLoggedOut(): void {
    this.subjectUserIsLoggedIn.next(false);
    // this.userIsLogged = false;
  }

  // returnLogginStatus(): boolean {
  //   return this.userIsLogged;
  // }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.subjectUserIsLoggedIn);
        }, 800);
      }
    );
    console.log('on passe bien dans authguard ', this.subjectUserIsLoggedIn);
    return promise;
  }

}
