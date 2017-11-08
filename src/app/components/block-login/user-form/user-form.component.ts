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

  constructor( private router:Router, 
               private loginService:LoginService) { }


  ngOnInit() {
  }

  loginUser(e, form: NgForm) {
    e.preventDefault();
    console.log(e);
    console.log('form: ', form);
    // let username = e.target.elements[0].value;
    // let password = e.target.elements[1].value;
    const username = form.value.pseudo;
    const password = form.value.password;

    if(username === 'Trucidator38' && password === 'joueur') {
      console.log('login ok');
      // this.loginService.setUserLoggedIn();
      this.onLogin();
      this.router.navigate(['/']);
    }

    console.log('login: ',username, ' ',password);
    return false;
  }

  onLogin() {
    this.loginService.subjectUserIsLoggedIn.next(true);
  }
}
