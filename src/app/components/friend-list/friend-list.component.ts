import { Component, OnInit } from '@angular/core';

/* Services */
import { ReturnJsonArrayService } from '../../services/return-json-array.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
  providers: [ReturnJsonArrayService]
})
export class FriendListComponent implements OnInit {

  // TODO remplacer par le service de connexion
  // Permet de savoir si l'utilisateur est connecté ou non
  isLogged = false;

  // Tableau contenant le profile du joueur à charger via le service
  ArrayProfileJoueur: any;

  // liste des différents status du joueur
  status = [
    {value: 'online', viewValue: 'En ligne', icone: '#2F9395'},
    {value: 'away', viewValue: 'Absent(e)', icone: '#F7D969'},
    {value: 'busy', viewValue: 'Occupé(e)', icone: '#EC1C4B'},
    {value: 'offline', viewValue: 'Déconnecté(e)', icone: '#5A5050'}
  ];

  /* Infos du joueur */
  pseudoJoueur: string ;
  // état du joueur ( Enligne, AFK, occupé ou hors ligne ) type => tableau d'état
  playerState: any;

  constructor( private _ReturnJsonArrayService: ReturnJsonArrayService ) {
    
  }

  // par défaut on est connecté en Ligne
  ngOnInit() {
    // TODO: changer cet appel lors de la connection du joueur
    this.getProfileJoueur(); // récupération des données à l'initialisation du composant
    // this.pseudoJoueur = this.ArrayProfileJoueur[0].idPseudo;
    this.playerState = {value: 'online', viewValue: 'En ligne', icone: '#2F9395'};
    // console.log('arrayJ: ', this.ArrayProfileJoueur);

    this.getFriendStatus();
  }

  getProfileJoueur (): void {
    this._ReturnJsonArrayService.getUser1_Service()
    .subscribe(profileJoueur => this.ArrayProfileJoueur = profileJoueur,
    error => console.log('erreurs: ', error),
    () => console.log('Profile joueur chargé: ', this.ArrayProfileJoueur));
  }

  setPlayerStatement(state): void {
    // console.log('test: ', state);
    this.playerState = state;
    console.log('playerstate: ', this.playerState);
  }

  getFriendStatus(): string {
    // console.log('friend state: ', this.ArrayProfileJoueur[0].friendList[0]);
    console.log('array: ', this.ArrayProfileJoueur);
    return 'statement';
  }

  setFriendStatus(): void {

  }


  seConnecter(): void {

  }

}
