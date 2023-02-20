import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar-recibo',
  templateUrl: './sidebar-recibo.component.html',
  styleUrls: ['./sidebar-recibo.component.css']
})
export class SidebarReciboComponent {
  
  //Inicio del proyecto
  ngOnInit(): void {
  }

  //Constructor
  constructor(public login: LoginService, private router: Router) { }


  //Metodo para cerrar sesion
  logout() {
    this.login.logout();
    this.router.navigate(["/login"]);
  }
}
