import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

/* Components */
// import { GlobalNewsComponent } from './global-news/global-news.component';
// import { PersonnalNewsComponent } from './personnal-news/personnal-news.component';

/* Services */
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-fil-actualite',
  templateUrl: './fil-actualite.component.html',
  styleUrls: ['./fil-actualite.component.css']
})
export class FilActualiteComponent implements OnInit {

  // boolean de login
  private userIsLogged = false;

  // Sub Router des onglet du tableau
  routeLinks: any[];

  // activeLinkIndex = -1;
  activeLinkIndex = 0;
  

  constructor(private router: Router,
              private loginService: LoginService) {

    this.routeLinks = [
      {
        label: 'Actualités générales',
        link: './generales',
        index: 0
      },
      {
        label: 'Actualités personnelles',
        link: './personnelles',
        index: 1
      }
    ];
  }

  ngOnInit(): void {

    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if (estConnecte === true) {
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
    });

    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks
          .find(tab => tab.link === '.' + this.router.url));
    });
  }

}
