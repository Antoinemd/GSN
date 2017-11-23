import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// TODO Création d'une interface ?
// import { InterfacePlats } from '../components/produits/interface-plats';

@Injectable()
export class ReturnJsonArrayService {

  userJeuxJsonPath = '../../../assets/json/user1.json';
  catalogueJeuxJsonPath = '../../../assets/json/catalogueJeux.json';
  usersJsonPath = '../../../assets/json/users.json';

  isVisibleSource: BehaviorSubject <boolean> = new BehaviorSubject(false);

  constructor(private _http: Http) {

  }

  // getMenuStatus_Service(): boolean {

  // }

  getUsers_Service(): Observable<any> {
    return this._http.get(this.usersJsonPath)
    .map((response: Response) => response.json());
  }

  getUser1_Service(): Observable<any> {
    return this._http.get(this.userJeuxJsonPath)
      .map((response: Response) => response.json());
  }

  getCatalogueJeux_Service(): Observable<any> {
    return this._http.get(this.catalogueJeuxJsonPath)
    .map((response: Response) => response.json());
  }

}
