import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

/* Serives */
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-dialogue-jeux',
  templateUrl: './dialogue-jeux.component.html',
  styleUrls: ['./dialogue-jeux.component.css']
})
export class DialogueJeuxComponent implements OnInit {

  userIsLogged: boolean;

  public title: string;
  public message: string;

  constructor(private loginService: LoginService,
              public dialogRef: MatDialogRef <DialogueJeuxComponent>) { }

  ngOnInit() {
    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if (estConnecte === true) {
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });
  }

}
