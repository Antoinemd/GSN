import { Component, OnInit } from '@angular/core';

/* Pipes */
// import { KeysPipe } from '../../../pipes/keys.pipe';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  sizeIcon: number;
  sideNavWidth: number;
  sideOpacity: number;


  constructor() { 
  }

  ngOnInit() {
    this.sideNavWidth = 55; // unit: px
    this.sideOpacity = 0.5;
    // this.getInfosJoueur();    
  }

  widthUp(){
    this.sideNavWidth = 200; // unit: px
    this.sideOpacity = 1;
    console.log("increase sidenav width");
  }

  widthDown(){
    this.sideNavWidth = 10;
    this.sideOpacity = 0.5;
    console.log("decrease sidenav width");
  }



}
