import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  categories: any;
  selectedAll: any;

  constructor() {
    this.categories = [
      { categorie: 'Articles', selected: false },
      { categorie: 'Jeux', selected: false },
      { categorie: 'Groupes', selected: false },
      { categorie: 'Personnes', selected: false },
    ];
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


  ngOnInit() {

  }


}
