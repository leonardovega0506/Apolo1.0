import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AlmacenGuard implements CanActivate {

  //Constructor
  constructor(private login: LoginService, private router: Router) { }

  //Guardar para Almacen
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Verificacion
    if (this.login.isLoggedIn() && this.login.getUserRoles() == 'ROLE_ALMACEN' || this.login.getUserRoles() == 'ROLE_ADMIN') {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
