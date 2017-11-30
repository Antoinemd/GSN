import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

/* Services */
import { SearchBarService } from '../../services/search-bar.service';
import { ReturnJsonArrayService } from '../../services/return-json-array.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [ReturnJsonArrayService]
})
export class SearchResultsComponent implements OnInit {

  categories: any;
  selectedAll: any;

  // variable contenant l'input entré par l'utilisateur dans la barre de recherche
  private research: string;

  // variable contenant la liste des utilisateurs
  ArrayUsers: any;

  // variable pour afficher / cacher le bouton d'ajout des amis
  private show = false;

  constructor(private searchBarService: SearchBarService,
              private returnJsonArray: ReturnJsonArrayService,
              public snackBar: MatSnackBar) {
    // on s'abonne à l'objet du service pour recevoir les chaines
    // de caracteres entrées dans la barre de recherche lors de l'appuie sur la touche entrée
    this.searchBarService.researchSubject.subscribe(
      (userInput: string) => {
        this.research = userInput;
      });

    this.categories = [
      { categorie: 'Articles', selected: true },
      { categorie: 'Jeux', selected: true },
      { categorie: 'Groupes', selected: true },
      { categorie: 'Personnes', selected: true },
    ];
    // this.categories.selectAll();
  }

  ngOnInit() {
    this.getInputKeyword();
    this.getListOfUsers();
    // this.show = false;
  }

  selectAll() {
    for (let i = 0; i < this.categories.length; i++) {
      this.categories[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.categories.every(function(item: any) {
        return item.selected === true;
      });
  }

  getInputKeyword(): string {
    return this.research;
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

  sendFriendRequest(user): void {
    this.snackBar.open("Demande d'amis envoyée à",user, {
      duration: 3000,
    });
  }


}
