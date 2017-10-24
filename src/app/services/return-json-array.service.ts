import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


// TODO Création d'une interface ?
// import { InterfacePlats } from '../components/produits/interface-plats';

@Injectable()
export class ReturnJsonArrayService {

  userJeuxJsonPath = '../../../assets/json/user1.json';

  constructor(private _http: Http) {

  }

  getData() {
    return this._http.get(this.userJeuxJsonPath)
      .map(res => res.json().data)
  }

  getUser1_Service(): Observable<any> {
    return this._http.get(this.userJeuxJsonPath)
      .map((response: Response) => response.json());
  }
    

}
