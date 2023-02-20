import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar-almacen',
  templateUrl: './sidebar-almacen.component.html',
  styleUrls: ['./sidebar-almacen.component.css']
})
export class SidebarAlmacenComponent implements OnInit {
  //Inicio del proyecto
  ngOnInit(): void {
  }

  //Constructor
  constructor(public login: LoginService,private router:Router) { }

  //Metodo para cerrar sesion
  logout() {
    this.login.logout();
    this.router.navigate(["/login"]);
  }
}
