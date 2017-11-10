import { Injectable } from '@angular/core';
import { CanActivate, 
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router,
         CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/* Services */
import { LoginService } from '../services/login.service';

/**
 * CanActivate peut etre utilisé pour un composant seul ou parent ayant des enfants
 * CanActivateChildren est utile pour ne bloquer l'accès qu'à certains composants enfant
 */
@Injectable()
export class AuthguardGuard implements CanActivate, CanActivateChild {

  constructor ( private loginService:LoginService,
                private router: Router ){
    
  }
   
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.loginService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if(authenticated){
            return true;
          } else {
            this.router.navigate(['/'])
          }
        }
      );
  }

  canActivateChild( childRoute: ActivatedRouteSnapshot, 
                    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
  
}
;