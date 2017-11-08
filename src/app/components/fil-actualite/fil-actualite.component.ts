import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Services */
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-fil-actualite',
  templateUrl: './fil-actualite.component.html',
  styleUrls: ['./fil-actualite.component.css']
})
export class FilActualiteComponent implements OnInit {

  constructor(private user:LoginService) { }

  ngOnInit() {
  }

}
