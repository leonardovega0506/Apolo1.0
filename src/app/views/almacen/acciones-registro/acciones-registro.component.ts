import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-acciones-registro',
  templateUrl: './acciones-registro.component.html',
  styleUrls: ['./acciones-registro.component.css']
})
export class AccionesRegistroComponent implements OnInit{

  idRegistro:any;
  registro:any;

  constructor(private andService:AndService, private router:Router,private aRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.idRegistro = this.aRoute.snapshot.paramMap.get('idRegistro');
    this.andService.obtenerRegistroByID(this.idRegistro).subscribe(
      (data)=>{
        this.registro = data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  generarAccion(idRegistro:any){
    this.andService.generarTiempoAlmacen(idRegistro).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['almacen/registros']);
        this.ngOnInit();
      }
    );
  }
}
