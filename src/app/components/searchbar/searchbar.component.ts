import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


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
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Blade and Soul',
      genre: 'MMORPG, Fantasy',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Destiny II',
      genre: 'MMORPG, Science-Fiction',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Final Fantasy XIV',
      genre: 'RPG, Fantasy',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'League of Legends',
      genre: 'Battle Arena',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Rocket League',
      genre: 'Sport',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'Unreal Tournament',
      genre: 'FPS, Science-Fiction',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'The Witcher 3 : Wild Hunt',
      genre: 'RPG, Fantasy',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    },
    {
      name: 'World Of Warcraft',
      genre: 'MMORPG',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor() {
    this.gameCtrl = new FormControl();
    this.filteredGames = this.gameCtrl.valueChanges
        .startWith(null)
        .map(game => game ? this.filterGames(game) : this.games.slice());
  }

  filterGames(name: string) {
    return this.games.filter(game =>
      game.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  ngOnInit() {
  }

}
