import { Component, OnInit } from '@angular/core';

/* Services */
import { ReturnJsonArrayService } from '../../services/return-json-array.service';
@Component({
  selector: 'app-catalogue-jeux',
  templateUrl: './catalogue-jeux.component.html',
  styleUrls: ['./catalogue-jeux.component.css'],
  providers:[ReturnJsonArrayService]  
})
export class CatalogueJeuxComponent implements OnInit {

  ArrayCatalogueJeux: any;
  
  constructor(private _ReturnJsonArrayService: ReturnJsonArrayService) { 

  }

  ngOnInit() {
    this.getCatalogueJeux();
  }

  getCatalogueJeux() {
    this._ReturnJsonArrayService.getCatalogueJeux_Service()
    .subscribe(catalogueJeux => this.ArrayCatalogueJeux = catalogueJeux,
    error => console.log('erreurs: ',error),
    () => console.log('Completed loading of JSON file: ', this.ArrayCatalogueJeux));
  }

}
