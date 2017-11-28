import { Component, OnInit } from '@angular/core';

import { ReturnJsonArrayService } from '../../../services/return-json-array.service'

@Component({
  selector: 'app-user-ressult',
  templateUrl: './user-ressult.component.html',
  styleUrls: ['./user-ressult.component.css'],
  // providers: [ReturnJsonArrayService]
})
export class UserRessultComponent implements OnInit {

  // variable contenant la liste des utilisateurs
  ArrayUsers: any;
  
  // variable pour afficher / cacher le bouton d'ajout des amis
  private show = false;

  constructor(private returnJsonArray:ReturnJsonArrayService ) { }

  ngOnInit() {
    this.getListOfUsers();
    
  }

  getListOfUsers() {
    this.returnJsonArray.getUsers_Service().
    subscribe(catalogueJeux => this.ArrayUsers = catalogueJeux,
    error => console.log('erreurs: ', error),
    () => console.log('Completed loading of JSON file: ', this.ArrayUsers));
  }

  setShowState(state: boolean) {
    this.show = state;
  }

  getShowState(): boolean {
    return this.show;
  }
}
