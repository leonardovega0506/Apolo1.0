import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  //Inicio del proyecto
  ngOnInit(): void {
  }

  //Constructor
  constructor(public login:LoginService,private router:Router){}


  //Metodo para cerrar sesion
  logout() {
    this.login.logout();
    this.router.navigate(["/login"]);
  }
}
