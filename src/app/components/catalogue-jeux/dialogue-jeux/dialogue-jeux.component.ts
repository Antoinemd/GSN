import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialogue-jeux',
  templateUrl: './dialogue-jeux.component.html',
  styleUrls: ['./dialogue-jeux.component.css']
})
export class DialogueJeuxComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef <DialogueJeuxComponent>) { }

  ngOnInit() {
  }

}
