import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Material */
import { MatCardModule, 
         MatFormFieldModule } from '@angular/material';

/* Services */ 
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor( private router:Router, 
               private user:LoginService) { }


  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;

    if(username === 'Trucidator38' && password === 'joueur') {
      console.log('login ok');
      this.user.setUserLoggedIn();
      this.router.navigate(['feeds']);
    }

    console.log('login: ',username, ' ',password);
    return false;
  }

}
