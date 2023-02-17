import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//Servicio
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registros-completos',
  templateUrl: './registros-completos.component.html',
  styleUrls: ['./registros-completos.component.css']
})
export class RegistrosCompletosComponent implements OnInit {

  //Atributos
  registros: any = [];
  verificacion: boolean = true;
  numeroEntrada?: any = 0;

  //Inicio del componente
  ngOnInit(): void {
    this.anandaService.listarRegistros().subscribe(
      (datos: any) => {
        this.registros = datos;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Constructor
  constructor(private anandaService: AndService, private modal: NgbModal, private router: Router) { }

  //Abrir Ventana Modal
  open(contenido) {
    this.modal.open(contenido, { centered: true });
  }

  //Mostrar input Modal
  showData() {
    return this.verificacion = true;
  }

  //Esconder Input Modal
  hideData() {
    return this.verificacion = false;

  }

  //Metodo para agregar un registro del tiempo
  generarRegistro() {
    this.anandaService.crearRegistro(this.numeroEntrada).subscribe(
      (data: any) => {
        Swal.fire("Registros","Registro creado con exito","success").then(
          (e) =>{
            this.ngOnInit();
            this.modal.dismissAll();
          }
        );
      },
      (error) => {
        Swal.fire("Error","No se ha podido crear el examen","error")
        console.log(error);
      }
    );
  }
}
