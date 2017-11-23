import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

/* Services */
import { SearchBarService } from '../../services/search-bar.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  // providers: [SearchBarService]
})
export class SearchResultsComponent implements OnInit {

  categories: any;
  selectedAll: any;
  
  // variable contenant l'input entré par l'utilisateur dans la barre de recherche
  private research: string;

  constructor(private searchBarService: SearchBarService) {
    // on s'abonne à l'objet du service pour recevoir les chaines 
    // de caracteres entrées dans la barre de recherche lors de l'appuie sur la touche entrée
    this.searchBarService.researchSubject.subscribe(
      (userInput: string) => {
        this.research = userInput;
      });

    this.categories = [
      { categorie: 'Articles', selected: false },
      { categorie: 'Jeux', selected: false },
      { categorie: 'Groupes', selected: false },
      { categorie: 'Personnes', selected: false },
    ];
  }

  ngOnInit() {
    this.getInputKeyword();  
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


}
