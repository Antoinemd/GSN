import { Component, OnInit } from '@angular/core';

/* Services */
import { ReturnJsonArrayService } from '../../services/return-json-array.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
  providers: [ReturnJsonArrayService]
})

export class FriendListComponent implements OnInit {

  // Permet de savoir si l'utilisateur est connecté ou non
  private userIsLogged = false;

  // Tableau contenant le profile du joueur à charger via le service
  ArrayProfileJoueur: any;

  // liste des différents status du joueur
  status = [
    {value: 'online', viewValue: 'En ligne', icone: '#1DBA4C'},
    {value: 'away', viewValue: 'Absent(e)', icone: '#F7D969'},
    {value: 'busy', viewValue: 'Occupé(e)', icone: '#EC1C4B'},
    {value: 'offline', viewValue: 'Déconnecté(e)', icone: '#5A5050'}
  ];

  /* Infos du joueur */
  pseudoJoueur: string ;
  // état du joueur ( Enligne, AFK, occupé ou hors ligne ) type => tableau d'état
  playerState: any;

  // Status des amis de l'utilisateur (car inaccessile par le Json)
  friendStatus = [
    {id: 'user2', status: 'online', icone: '#1DBA4C'},
    {id: 'user3', status: 'away', icone: '#F7D969'},
    {id: 'user4', status: 'busy', icone: '#EC1C4B'},
    {id: 'user5', status: 'offline', icone: '#5A5050'}
  ];

  //toolip position
  position = 'left';

  menuIcon = [
    {value: 'parametres', viewValue: 'Profil', icone: 'person'},
    {value: 'amis', viewValue: 'Gérer amis', icone: 'group'},
    {value: 'messages', viewValue: 'Messagerie', icone: 'message'}
  ];

  constructor( private _ReturnJsonArrayService: ReturnJsonArrayService,
               private loginService: LoginService,
               private router: Router ) {

  }

  // par défaut on est connecté en Ligne
  ngOnInit(): void {

    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if (estConnecte === true) {
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });

    // this.isUserLoggedIn = this.login.getUserLoggedIn();
    // console.log('utilisateur connecté ?', this.isUserLoggedIn);

    // TODO: changer cet appel lors de la connection du joueur
    this.getProfileJoueur(); // récupération des données à l'initialisation du composant
    this.playerState = { value: 'online', viewValue: 'En ligne', icone: '#1DBA4C' };
  }

  // ngOnDestroy(): void {
  //   this.loginService.subjectUserIsLoggedIn.unsubscribe();
  // }

  getProfileJoueur (): void {
    this._ReturnJsonArrayService.getUser1_Service()
    .subscribe(profileJoueur => this.ArrayProfileJoueur = profileJoueur,
    error => console.log('erreurs: ', error),
    () => console.log('Profile joueur chargé: ', this.ArrayProfileJoueur));
  }

  setPlayerStatement(state): void {
    this.playerState = state;
    console.log('playerstate: ', this.playerState);
  }

  onClick(): void {
    this.router.navigate(['/login']);
  }

  navigateOnClick(value):void {

    console.log('on navigue vers ', value);
    this.router.navigate(['/'+value]);


  }

  // todo: implémenter la méthode naviguer vers fiche description amis
  descFriends(): void {
    // this.router.navigate
  }

  test () {
    console.log('état: ', this.userIsLogged);
  }

}
