import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/* Services */
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor ( private user:LoginService ){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.user.getUserLoggedIn();
  }
}
