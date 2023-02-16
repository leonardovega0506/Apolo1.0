import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-acciones-compras',
  templateUrl: './acciones-compras.component.html',
  styleUrls: ['./acciones-compras.component.css']
})
export class AccionesComprasComponent implements OnInit{


    idRegistro:any;
    registro:any;

  constructor(private router:Router, private aRoute:ActivatedRoute, private andService:AndService){}

  ngOnInit(): void {
    this.idRegistro = this.aRoute.snapshot.paramMap.get('idRegistro');
    this.andService.obtenerRegistroByID(this.idRegistro).subscribe(
      (data) =>{
        console.log(data);
        this.registro = data;
      }
    );
  }
  generarAccionCompraMuestraL(idRegistro:any){
    this.andService.generarTiempoCompraMuestraL(idRegistro).subscribe(
      (data) =>{
        this.router.navigate(['/compras/registros']);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  generarAccionCompraMF(idRegistro:any){
    this.andService.generarTiempoCompraMF(idRegistro).subscribe(
      (data) =>{
        this.router.navigate(['/compras/registros']);
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
