import { Component, OnInit } from '@angular/core';

/* Composants */
import { SideNavComponent } from '../side-nav/side-nav.component';

/* Services */
import { ReturnJsonArrayService } from '../../../services/return-json-array.service';

@Component({
  selector: 'app-personnal-gamelist',
  templateUrl: './personnal-gamelist.component.html',
  styleUrls: ['./personnal-gamelist.component.css'],
  providers:[ReturnJsonArrayService]
})

export class PersonnalGamelistComponent implements OnInit {

  ArrayInfosUser: any;
  
  constructor(private _ReturnJsonArrayService: ReturnJsonArrayService) { 
  }

  ngOnInit() {
    this.getInfosJoueur();   
  }

  getInfosJoueur() {
    this._ReturnJsonArrayService.getUser1_Service()
    .subscribe(infoUser => this.ArrayInfosUser = infoUser,
    error => console.log('erreurs: ',error),
    () => console.log('Completed loading of JSON file: ', this.ArrayInfosUser));
  }
}
