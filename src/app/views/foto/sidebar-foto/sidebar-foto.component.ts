import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar-foto',
  templateUrl: './sidebar-foto.component.html',
  styleUrls: ['./sidebar-foto.component.css']
})
export class SidebarFotoComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private login:LoginService,private router:Router){}

  //Metodo para cerrar sesion
  logout() {
    this.login.logout();
    this.router.navigate(["/login"]);
  }
}
