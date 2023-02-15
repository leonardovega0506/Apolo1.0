import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  users:any=[];
  usuarioData={
    username:'',
    password:'',
    nombre:'',
    area:'',
  }


  constructor(private andService:AndService,private modal:NgbModal){}

  ngOnInit(): void {
    this.andService.listaUsuarios().subscribe(
      (data) =>{
        this.users= data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  open(usuarioNuevo) {
    this.modal.open(usuarioNuevo, { size: 'lg' });
  }
  crearUsuario(){
    this.andService.crearUsuario(this.usuarioData).subscribe(
      (data) =>{
       this.ngOnInit();
       this.modal.dismissAll();
      },
      (error) =>{
        console.log(error);
      }
      );
  }
}
