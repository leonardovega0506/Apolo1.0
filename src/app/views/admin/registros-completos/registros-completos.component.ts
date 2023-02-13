import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-registros-completos',
  templateUrl: './registros-completos.component.html',
  styleUrls: ['./registros-completos.component.css']
})
export class RegistrosCompletosComponent implements OnInit{

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
