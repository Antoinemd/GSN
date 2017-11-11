import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  // indique si l'utilisateur est conecté ou non
  //un obserbale peut prendre jusqu'a 3 callback: normal data / errors / complete
  subjectUserIsLoggedIn = new Subject();

  constructor() { 
    this.subjectUserIsLoggedIn.next(false);
  }
  
  setUserLoggedIn():void {
    this.subjectUserIsLoggedIn.next(true);
  }

  setUserLoggedOut():void {
    this.subjectUserIsLoggedIn.next(false);
    
  }

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
