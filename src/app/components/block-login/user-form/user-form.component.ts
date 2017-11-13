import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Material */
import { MatCardModule,
         MatFormFieldModule } from '@angular/material';

/* Services */
import { LoginService } from '../../../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {



  private userIsLogged: boolean;

  constructor( private router: Router,
               private loginService: LoginService) { }


  ngOnInit() {

    // this.loginService.subjectUserIsLoggedIn.subscribe(
    //   (estConnecte: boolean) => {
    //     if (estConnecte === true) {
    //       this.userIsLogged = true;
    //     } else {
    //       this.userIsLogged = false;
    //     }
    //   });
  }



  // loginUser(e, form: NgForm) {
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    // console.log('form: ', form);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    // const username = form.value.pseudo;
    // const password = form.value.password;

    if (username === 'Trucidator38' && password === 'joueur') {
      console.log('login ok');

      this.onLogin();
      this.userIsLogged = true;
      this.router.navigate(['/actualites/generales']);
    }

    console.log('login: ', username, ' ', password);
    return false;
  }


  directlyLogged(): void {
    this.loginService.subjectUserIsLoggedIn.next(true);
    this.userIsLogged = true;
  }

  onLogin() {
    this.loginService.subjectUserIsLoggedIn.next(true);
  }
}
