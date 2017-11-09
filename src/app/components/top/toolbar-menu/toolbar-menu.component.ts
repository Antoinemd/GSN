import { Component, OnInit, OnDestroy } from '@angular/core';

/* Material */ 
import {MatDialogModule, 
        MatDialog, 
        MatDialogRef, 
        MAT_DIALOG_DATA,
        MatMenuModule } from '@angular/material';

/* Composants */
import { UserFormComponent } from '../../block-login/user-form/user-form.component';
import { SearchbarComponent } from '../../searchbar/searchbar.component';
import { Router } from '@angular/router';

import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit, OnDestroy {

  // estLogged: boolean;
  
  // acc_connected: string;
  private userIsLogged = false;

  constructor(private router: Router, 
              private loginService: LoginService) { }

  ngOnInit() {

    // this.estLogged = this.loginService.getUserLoggedIn();
    // this.setBtnValue();
    
    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if(estConnecte === true){
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });
  }

  ngOnDestroy() {
    this.loginService.subjectUserIsLoggedIn.unsubscribe();    
  }

  onLogout():void {
    this.loginService.setUserLoggedOut();
    this.router.navigate(['/'])
  }

  
  isUserLogged(): void {
    console.log('user logged ? ', this.userIsLogged);
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
