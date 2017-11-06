import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DialogueJeuxComponent } from '../components/catalogue-jeux/dialogue-jeux/dialogue-jeux.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) {

  }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MatDialogRef<DialogueJeuxComponent>;
    dialogRef = this.dialog.open(DialogueJeuxComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}

