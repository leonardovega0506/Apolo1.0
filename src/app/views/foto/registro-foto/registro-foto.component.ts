import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-registro-foto',
  templateUrl: './registro-foto.component.html',
  styleUrls: ['./registro-foto.component.css']
})
export class RegistroFotoComponent implements OnInit{

  //Atributos
  registros:any=[];

  //Constructor
  constructor(private router:Router, private andService:AndService){}

  //Inicio del componente
  ngOnInit(): void {
    this.andService.listarRegistros().subscribe(
      (data) =>{
        this.registros = data;
      },
      (error) =>{
        console.log(error);
      }
      
    );
  }


  //Ruta hacia las acciones del registro
  accionesRegistro(idRegistro:any){
    this.router.navigate(['/foto/acciones-foto',idRegistro])
  }

}
