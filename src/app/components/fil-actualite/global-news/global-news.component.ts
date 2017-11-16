import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrls: ['./global-news.component.css']
})
export class GlobalNewsComponent implements OnInit {

  private userIsLogged = false;
  color = 'accent';
  checked = false;
  disabled = false;

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if (estConnecte === true) {
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });
  }

  onSwitch(value): void {
    if (value.checked === true) {
      // this.device = 1;
      this.userIsLogged = true;
    } else {
      // this.device = 0;
      this.userIsLogged = false;
    }
  }

  getuserIsLogged(): boolean {
    return this.userIsLogged;
  }

  test() {
    console.log('on est en mode connecté ?: ', this.userIsLogged);
  }
  // ngOnDestroy(): void {
  //   this.loginService.subjectUserIsLoggedIn.unsubscribe();
  // }

}
