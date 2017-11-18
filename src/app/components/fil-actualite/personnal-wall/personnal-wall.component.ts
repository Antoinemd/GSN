import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnal-wall',
  templateUrl: './personnal-wall.component.html',
  styleUrls: ['./personnal-wall.component.css']
})
export class PersonnalWallComponent implements OnInit {

  private userIsLogged = false;
  
  constructor(private router: Router, 
            private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if(estConnecte === true){
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
    });

  }

  ngOnDestroy() {
    this.loginService.subjectUserIsLoggedIn.unsubscribe();    
  }

  onLogout():void {
    this.loginService.setUserLoggedOut();
    this.router.navigate(['/actualites/generales'])
  }

  
  isUserLogged(): void {
    console.log('user logged ? ', this.userIsLogged);
  }

}
