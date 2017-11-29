import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

/* Services */
import { SearchBarService } from '../../../services/search-bar.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  gameCtrl: FormControl;
  filteredGames: Observable<any[]>;

  games: any[] = [
    {
      name: 'Ark: Survival Evolved',
      genre: 'Action-Aventure, Survival Game',
      icone: '../../../../assets/img/icons/ark-ico.png'
    },
    {
      name: 'Blade and Soul',
      genre: 'MMORPG, Fantasy',
      icone: '../../../../assets/img/icons/bns-ico.png'
    },
    {
      name: 'Destiny II',
      genre: 'MMORPG, Science-Fiction',
      icone: '../../../../assets/img/icons/destiny2-ico.png'
    },
    {
      name: 'Final Fantasy XIV',
      genre: 'RPG, Fantasy',
      icone: '../../../../assets/img/icons/ff14-ico.png'
    },
    {
      name: 'League of Legends',
      genre: 'Battle Arena',
      icone: '../../../../assets/img/icons/lol-ico.png'
    },
    {
      name: 'Rocket League',
      genre: 'Sport',
      icone: '../../../../assets/img/icons/rocketleague-ico.png'
    },
    {
      name: 'Unreal Tournament',
      genre: 'FPS, Science-Fiction',
      icone: '../../../../assets/img/icons/ut-ico2.png'
    },
    {
      name: 'The Witcher 3 : Wild Hunt',
      genre: 'RPG, Fantasy',
      icone: '../../../../assets/img/icons/witcher3-ico.png'
    },
    {
      name: 'World Of Warcraft',
      genre: 'MMORPG',
      icone: '../../../../assets/img/icons/wow-ico.png'
    }
  ];

  constructor(private router: Router, private searchBarService: SearchBarService) {
    this.gameCtrl = new FormControl();
    this.filteredGames = this.gameCtrl.valueChanges
        .startWith(null)
        .map(game => game ? this.filterGames(game) : this.games.slice());
  }

  filterGames(name: string) {
    return this.games.filter(game =>
      game.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onSearchChange(inputValue: string ) {  
    console.log("searchBar component:", inputValue);
    this.searchBarService.setResearchSubject(inputValue);
  }


  ngOnInit() {
  }

}
