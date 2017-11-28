import { Component, OnInit } from '@angular/core';

/* Services */
import { ReturnJsonArrayService } from '../../services/return-json-array.service';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-param',
  templateUrl: './user-param.component.html',
  styleUrls: ['./user-param.component.css'],
  providers: [ReturnJsonArrayService]
})

export class UserParamComponent implements OnInit {

  public ArrayInfosUsers: any;
  private userIsLogged = false;

  constructor( private _returnJsonArrayService: ReturnJsonArrayService,
               private _loginService: LoginService,
               public snackBar: MatSnackBar ) {
  }

  ngOnInit() {
    this.getInfosJoueur();

    this._loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if (estConnecte === true) {
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });
  }


  getInfosJoueur(): void {
    this._returnJsonArrayService.getUser1_Service()
    .subscribe(infoUser => this.ArrayInfosUsers = infoUser,
    error => console.log('erreurs: ', error),
    () => console.log('Completed loading of JSON file: ', this.ArrayInfosUsers));
  }

  openSnackBar(): void {
    // avec un simple message
    // this.snackBar.open('simple message ');
    this.snackBar.open('Vos paramètres on bien été sauvegardé.','', {
      duration: 3000,
    });
  }

}
