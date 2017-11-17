import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  // favoriteSeason: string;
  categories: any;
  selectedAll: any;
  // names: any;
  
  // = ['Tous', 'Jeux', 'Amis', 'Arcticles', 'Groupes'];

  constructor() { 
    this.categories = [
      // { categorie: 'Tous', selected: false },
      { categorie: 'Jeux', selected: false },
      { categorie: 'Personnes', selected: false },
      { categorie: 'Articles', selected: false },
      { categorie: 'Groupes', selected: false }
    ];

    // this.names = [
    //   { name: 'Prashobh', selected: false },
    //   { name: 'Abraham', selected: false },
    //   { name: 'Anil', selected: false },
    //   { name: 'Sam', selected: false },
    //   { name: 'Natasha', selected: false },
    //   { name: 'Marry', selected: false },
    //   { name: 'Zian', selected: false },
    //   { name: 'karan', selected: false },
    // ];
  }




  selectAll() {
    for (var i = 0; i < this.categories.length; i++) {
      this.categories[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.categories.every(function(item:any) {
        return item.selected == true;
      })
  }


  ngOnInit() {

  }


}
