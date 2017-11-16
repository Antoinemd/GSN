import { Component, OnInit } from '@angular/core';

/* Service */
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-personnal-wall',
  templateUrl: './personnal-wall.component.html',
  styleUrls: ['./personnal-wall.component.css']
})
export class PersonnalWallComponent implements OnInit {

  private userIsLogged = false;
  color = 'accent';
  checked = false;
  disabled = false;
  
  constructor(private loginService: LoginService) { }

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

}
