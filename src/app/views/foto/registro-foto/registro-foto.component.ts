import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-registro-foto',
  templateUrl: './registro-foto.component.html',
  styleUrls: ['./registro-foto.component.css']
})
export class RegistroFotoComponent implements OnInit{

  constructor(private router:Router, private andService:AndService){}

  registros:any=[];
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

  accionesRegistro(idRegistro:any){
    this.router.navigate(['/foto/acciones-foto',idRegistro])
  }

}
