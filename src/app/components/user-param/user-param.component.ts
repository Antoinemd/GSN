import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

/* Services */
import { ReturnJsonArrayService } from '../../services/return-json-array.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-param',
  templateUrl: './user-param.component.html',
  styleUrls: ['./user-param.component.css'],
  providers: [ReturnJsonArrayService]
  
})
export class UserParamComponent implements OnInit, OnDestroy {

  private ArrayInfosUsers:any;
  private userIsLogged = false;
  subscription: Subscription;
  

  constructor( private _returnJsonArrayService:ReturnJsonArrayService,
               private _loginService:LoginService ) {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getInfosJoueur() {
    this._returnJsonArrayService.getUser1_Service()
    .subscribe(infoUser => this.ArrayInfosUsers = infoUser,
    error => console.log('erreurs: ', error),
    () => console.log('Completed loading of JSON file: ', this.ArrayInfosUsers));
  }

}
