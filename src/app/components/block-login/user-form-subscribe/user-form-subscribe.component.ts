import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-form-subscribe',
  templateUrl: './user-form-subscribe.component.html',
  styleUrls: ['./user-form-subscribe.component.css']
})
export class UserFormSubscribeComponent implements OnInit {

  
  
  constructor() { }


  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  // mdp = new FormControl('', [Validators.required, 
  //                            Validators.minLength(8),
  //                            Validators.call(this.checkConfirmPassword())]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'Vous devez entre une adresse' :
          this.email.hasError('email') ? 'Cet e-mail est invalide' :
              '';
    }

    // getErrorPwMessage() {

    // }

    // checkConfirmPassword(){

    // }

  ngOnInit() {
  }

  // onSignup(form: Ngform) {
  //   const email = form.value

  // }

}
