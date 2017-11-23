import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchBarService {
  public researchSubject: Subject<string> = new Subject<string>();

  constructor(private router: Router) {
    this.researchSubject.next('init');
  }

  setResearchSubject(input: string): void {
    console.log('maj: ', input);
    this.researchSubject.next(input);
    this.router.navigate(['rechercher']);
    
  }

  // Pas besoin de getter puisque le sujet met à jour la variable et envoit un event 
  // aux abonnés pour leur notifier la maj de la variable
  
  // getResearchString(): Subject<string> {
  //   return this.ResearchSubject;
  // }

}
