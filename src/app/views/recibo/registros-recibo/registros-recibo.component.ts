import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registros-recibo',
  templateUrl: './registros-recibo.component.html',
  styleUrls: ['./registros-recibo.component.css']
})
export class RegistrosReciboComponent implements OnInit{

  registros:any=[];

  verificacion:boolean = true;

  numeroEntrada?:any=0;

  ngOnInit(): void {
    this.anandaService.listarRegistros().subscribe(
      (datos:any)=>{
        this.registros = datos;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  constructor(private anandaService:AndService,private modal:NgbModal,private router:Router){}

  open(contenido) {
    this.modal.open(contenido, { centered: true });
  }
  showData() {
    return this.verificacion = true;
  }
  hideData() {
    return this.verificacion = false;

  }
  generarRegistro(){
    Swal.fire({
      icon: 'question',
      title: "Generar Registro",
      text: "¿Desea generar el registro?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Generar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) =>{
        if(e.isConfirmed){
          this.anandaService.crearRegistro(this.numeroEntrada).subscribe(
            (data:any) =>{
              console.log(data);
              this.modal.dismissAll();
              this.ngOnInit();
            },
            (error) =>{
              console.log(error);
            }
          );
        }
      }
    );

  }
  
}
