import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  // taille par défaut de la barre minimisée
  sideNavWidth = 10;
  sideOpacity = 1;

  constructor() { }

  ngOnInit() {
    this.sideOpacity = 0.5;
  }

  widthUp(){
    this.sideNavWidth = 200;  
    this.sideOpacity = 1;
    console.log("increase sidenav width");
  }

  widthDown(){
    this.sideNavWidth = 10;
    this.sideOpacity = 0.5;
    console.log("decrease sidenav width");
  }

}
