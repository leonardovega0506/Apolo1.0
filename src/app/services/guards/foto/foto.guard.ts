import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class FotoGuard implements CanActivate {
  //Constructor
  constructor(private login: LoginService, private router: Router) { }

  //Guard para Foto
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Verificacion
    if (this.login.isLoggedIn() && this.login.getUserRoles() == 'ROLE_FOTO' || this.login.getUserRoles() == 'ROLE_ADMIN') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
