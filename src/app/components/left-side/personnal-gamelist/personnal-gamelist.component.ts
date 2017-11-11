import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

/* Composants */
// import { SideNavComponent } from '../side-nav/side-nav.component';

/* Services */
import { ReturnJsonArrayService } from '../../../services/return-json-array.service';
import { NotifyStateMenuService } from '../../../services/notify-state-menu.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-personnal-gamelist',
  templateUrl: './personnal-gamelist.component.html',
  styleUrls: ['./personnal-gamelist.component.css'],
  providers: [ReturnJsonArrayService]
})

export class PersonnalGamelistComponent implements OnInit, OnDestroy {

  // TODO remplacer par le service de connexion
  // boolean permettant de savoir si l'utilisateur est connecté ou non
  private userIsLogged = false;

  // tableau contenant les infos JSON de l'utilisateur1
  ArrayInfosUser: any;

  // message1: any;
  message: boolean;

  subscription: Subscription;

  constructor(private _ReturnJsonArrayService: ReturnJsonArrayService,
              private notifyStateMenuService: NotifyStateMenuService,
              private loginService: LoginService ) {
    // subscribe to home component messages
    this.subscription = this.notifyStateMenuService.getMessage()
      .subscribe(message => { this.message = message; });
  }

  ngOnInit() {
    this.getInfosJoueur();

    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if(estConnecte === true){
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });
  }

  
  // unsubscribe to ensure no memory leaks
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.loginService.subjectUserIsLoggedIn.unsubscribe();
  }

  getMenusStaus() {
    console.log('status: ', this.message);
  }

  getInfosJoueur() {
    this._ReturnJsonArrayService.getUser1_Service()
    .subscribe(infoUser => this.ArrayInfosUser = infoUser,
    error => console.log('erreurs: ', error),
    () => console.log('Completed loading of JSON file: ', this.ArrayInfosUser));
  }
}

