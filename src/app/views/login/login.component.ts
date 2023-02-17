import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables para el form del Login
  loginForm = {
    "username": '',
    "password": ''
  }
  //Constructor
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {}

  //Metodo para ingresar al dashboard corresponiente
  loginSubmit() {
    if (this.loginForm.username.trim() == '' || this.loginForm.username.trim() == null) {
      Swal.fire('Error','Asegurate de poner el usuario al ingresar','error');
      return;
    }
    if (this.loginForm.password.trim() == '' || this.loginForm.password.trim() == null) {
      Swal.fire('Error','Asegurate de poner la contraseña al ingresar','error');
      return;
    }
    //Conexion al service login
    this.login.loginToken(this.loginForm).subscribe(
      (data: any) => {
        Swal.fire('Acceso',"Accesos Correcto","success")
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user);
            //Verificacion de Roles
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
        Swal.fire("Error","Error al Entrar, verifica nuevamente","error");
      }
    )
}

}
