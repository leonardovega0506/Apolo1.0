import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class FotoGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.isLoggedIn() && this.login.getUserRoles() == 'FOTO' || this.login.getUserRoles() == 'ADMIN'){
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
  
}
