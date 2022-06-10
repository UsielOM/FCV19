import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor( private authService:AuthService, private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ):
      boolean 
      | UrlTree 
      | Observable<boolean | UrlTree> 
      | Promise<boolean | UrlTree> {
     return this.authService.auth().pipe(
      map(isAuthenticated => {
        if(!isAuthenticated){
          this.router.navigate([""]);
        }
        return isAuthenticated;
      })
     );
  }
}
