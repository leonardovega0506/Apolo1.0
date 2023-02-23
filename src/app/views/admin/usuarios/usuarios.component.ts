import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  //Atributos
  users: any = [];
  usuarioData = {
    username: '',
    password: '',
    nombre: '',
    area: '',
  }

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal) { }

  //Inicio del Proyecto
  ngOnInit(): void {
    //Listar Usuarios
    this.andService.listaUsuarios().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Abrir ventana modal para crear un usuario nuevo
  open(usuarioNuevo) {
    this.modal.open(usuarioNuevo, { size: 'lg' });
  }

  //Metodo para crear un usuario
  crearUsuario() {
    if(this.usuarioData.nombre == null || this.usuarioData.username == null || this.usuarioData.area == null || this.usuarioData.password == null || this.usuarioData.nombre == "" || this.usuarioData.area == "" || this.usuarioData.password == "" || this.usuarioData.username == ""){
      Swal.fire("Error","Por favor complete los campos","warning");
    }
    else{
    Swal.fire({
      icon: 'question',
      title: "Crear Usuario",
      text: "¿Desea Crear un usuario?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.andService.crearUsuario(this.usuarioData).subscribe(
            (data) => {
              this.ngOnInit();
              this.modal.dismissAll();
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    );
  }
}
}
