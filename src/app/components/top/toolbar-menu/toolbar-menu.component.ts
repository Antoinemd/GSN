import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { UserFormComponent } from '../../user-form/user-form.component';
import { SearchbarComponent } from '../../searchbar/searchbar.component';


@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  openDialog() {

  }

}

/*export class DialogResultExample {
  selectedOption: string;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {

  }
}*/
