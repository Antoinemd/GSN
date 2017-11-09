import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

/* Components */
import { GlobalNewsComponent } from './global-news/global-news.component';
import { PersonnalNewsComponent } from './personnal-news/personnal-news.component';

/* Services */
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-fil-actualite',
  templateUrl: './fil-actualite.component.html',
  styleUrls: ['./fil-actualite.component.css']
})
export class FilActualiteComponent implements OnInit {


  // Sub Router des onglet du tableau 
  routeLinks: any[];  
  activeLinkIndex = -1;
  
  constructor(private router: Router) {
    
    this.routeLinks = [
      {
        label: 'Actualités générales',
        link: './global-news',
        // component: GlobalNewsComponent,
        index: 0
      },
      {
        label: 'Actualités personnelles',
        link: './personnal-news',
        // Component: PersonnalNewsComponent,
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks
          .find(tab => tab.link === '.' + this.router.url));
    });
  }
}
