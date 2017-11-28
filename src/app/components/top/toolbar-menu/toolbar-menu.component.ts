import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Material */
import {MatDialogModule,
        MatDialog,
        MatDialogRef,
        MAT_DIALOG_DATA,
        MatMenuModule } from '@angular/material';

/* Composants */
import { UserFormComponent } from '../../block-login/user-form/user-form.component';
import { SearchbarComponent } from '../../searchbar/searchbar.component';

/* Services */
import { LoginService } from '../../../services/login.service';
import { ReturnJsonArrayService } from '../../../services/return-json-array.service';


@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css'],
  providers: [ReturnJsonArrayService]
})
export class ToolbarMenuComponent implements OnInit {

  // état boolean loggin
  public userIsLogged = false;
  // variable contenant les infos json
  private ArrayInfosUsers: any;


  constructor(private router: Router,
              private _returnJsonArrayService: ReturnJsonArrayService,
              private loginService: LoginService) {
  }

  ngOnInit() {

    this.getInfosJoueur();

    this.loginService.subjectUserIsLoggedIn.subscribe(
      (estConnecte: boolean) => {
        if (estConnecte === true) {
          this.userIsLogged = true;
        } else {
          this.userIsLogged = false;
        }
      });
  }

  // ngOnDestroy(): void {
  //   this.loginService.subjectUserIsLoggedIn.unsubscribe();
  // }

  onLogout(): void {
    this.loginService.setUserLoggedOut();
    this.router.navigate(['/actualites/generales'])
  }

  onSearch(): void {
    this.router.navigate(['/rechercher']);
  }

  isUserLogged(): void {
    console.log('user logged ? ', this.userIsLogged);
    // console.log('component statement service ? ', this.loginService.returnLogginStatus());
  }

  getInfosJoueur(): void {
    this._returnJsonArrayService.getUser1_Service()
    .subscribe(infoUser => this.ArrayInfosUsers = infoUser,
    error => console.log('erreurs: ', error),
    () => console.log('Completed loading of JSON file: ', this.ArrayInfosUsers));
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
