import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {
  
  groupsArray = [
    { nomGroupe: 'Loli Fan Club',
      nomJeu: 'Blade and Soul',
      icone: '../../../assets/img/avatar/children-game_dribble.png',
      nbPersonnes: '5',
      nbNewMsg: '2'
    },
    { nomGroupe: 'The Witcher Comedy Club',
      nomJeu: 'The Witcher 3',
      icone: '../../../assets/img/avatar/children-game_dribble.png',
      nbPersonnes: '10',
      nbNewMsg: '6'
    },
    { nomGroupe: 'DLC Land',
      nomJeu: 'Destiny 2',
      icone: '../../../assets/img/avatar/children-game_dribble.png',
      nbPersonnes: '7',
      nbNewMsg: '5'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
