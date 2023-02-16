import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  ngOnInit(): void {
  }
  constructor(public login:LoginService){}

  logout(){
    this.login.logout();
    window.location.reload();
  }
}
