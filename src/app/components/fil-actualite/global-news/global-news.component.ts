import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.css']
})
export class GlobalNewsComponent implements OnInit {

  private userIsLogged = false;
  

  constructor( private loginService:LoginService) { }

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
  
  test(){
    console.log('on est en mode connecté ?: ', this.userIsLogged);
  }
  // ngOnDestroy(): void {
  //   this.loginService.subjectUserIsLoggedIn.unsubscribe();
  // }

}
