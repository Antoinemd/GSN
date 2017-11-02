import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


/* Services */
import { ReturnJsonArrayService } from '../../services/return-json-array.service';
import { DialogsService } from '../../services/dialogs.service';

/* Components */
import { DialogueJeuxComponent } from './dialogue-jeux/dialogue-jeux.component';

@Component({
  selector: 'app-catalogue-jeux',
  templateUrl: './catalogue-jeux.component.html',
  styleUrls: ['./catalogue-jeux.component.css'],
  providers: [ReturnJsonArrayService, DialogsService]
})
export class CatalogueJeuxComponent implements OnInit {

  ArrayCatalogueJeux: any;

  // valeur selectionné pour le trie après la selection d'un choix
  selectedValue: string;

  // noms html des icones material
  iconeAlpha = 'sort_by_alpha';
  iconDate = 'date_range';
  iconStar = 'star_rate';

  // valeur du menu
  sortBy = [
    {value: 'alpha', viewValue: 'Ordre Alphabétique', icone: this.iconeAlpha},
    {value: 'date', viewValue: 'Date de Sortie', icone: this.iconDate},
    {value: 'rating', viewValue: 'Popularité', icone: this.iconStar}
  ];

  // résultat pour le formulaire
  public result: any;


  constructor( private _ReturnJsonArrayService: ReturnJsonArrayService,
               private dialogueService: DialogsService ) {

  }

  ngOnInit() {
    this.getCatalogueJeux();
  }

  /**
   *  Sur la selection d'un élément, remplace l'attribut 'icone' par la chaine vide
   */
  onChange(): void {

    if (this.sortBy[0].viewValue !== 'Ordre Alphabétique') {
      console.log('menu déjà construit');
    }

    console.log('valeur changée');
    for (let i = 0; i < this.sortBy.length; i++) {
      this.sortBy[i].icone = '';
    }
    console.log('la valeur selectionnée est: ', this.selectedValue)    ;
  }

  /**
   * Reconstruit le menu apres la selection d'un élément
   */
  rebuildFilterMenu(): void {

    this.sortBy[0].icone = this.iconeAlpha;
    this.sortBy[1].icone = this.iconDate;
    this.sortBy[2].icone = this.iconStar;
  }


  getCatalogueJeux() {
    this._ReturnJsonArrayService.getCatalogueJeux_Service()
    .subscribe(catalogueJeux => this.ArrayCatalogueJeux = catalogueJeux,
    error => console.log('erreurs: ', error),
    () => console.log('Completed loading of JSON file: ', this.ArrayCatalogueJeux));
  }

  orderBy(): void {
    for (let i = 0; i < this.sortBy.length; i++) {
      // var element = this.foods[i];
      // si l'élément du tableau sortBy parcouru vaut alpha
      if (this.sortBy[i].value === 'alpha') {


      }
      // si value = date
      if (this.sortBy[i].value === 'date') {

      }
      // si value = rating ( trier en fait par ID du jeu)
      if (this.sortBy[i].value === 'rating') {

      }
    }
  }

  public openDialog(titre: string, desc: string) {
    this.dialogueService
      .confirm(titre, desc)
      .subscribe(res => this.result = res);
  }

}
