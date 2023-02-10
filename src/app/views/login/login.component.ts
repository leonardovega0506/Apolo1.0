import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {
    "username": '',
    "password": ''
  }
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    if (this.loginForm.username.trim() == '' || this.loginForm.username.trim() == null) {
      alert("El usuario no puede estar vacio");
      return;
    }
    if (this.loginForm.password.trim() == '' || this.loginForm.password.trim() == null) {
      alert("El usuario no puede estar vacio");
      return;
    }
    this.login.loginToken(this.loginForm).subscribe(
      (data: any) => {
        console.log(data);
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            console.log(user);
            if (this.login.getUserRoles() == "ROLE_ADMIN") {
              this.router.navigate(['admin']);
            }
            else if (this.login.getUserRoles() == 'ROLE_ALMACEN') {
              this.router.navigate(['almacen']);
            }
            else if (this.login.getUserRoles() == 'ROLE_COMPRAS') {
              this.router.navigate(['compras']);
            }
            else if (this.login.getUserRoles() == 'ROLE_FOTO') {
              this.router.navigate(['foto']);
            }
            else if (this.login.getUserRoles() == "ROLE_RECIBO") {
              this.router.navigate(['recibo']);
            }
            else{
              this.login.logout();
            }
          }
        )
      },
      (error) => {
        console.log(error);
        alert('Error');
      }
    )

  }

}
