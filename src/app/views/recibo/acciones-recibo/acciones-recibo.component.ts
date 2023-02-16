import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-acciones-recibo',
  templateUrl: './acciones-recibo.component.html',
  styleUrls: ['./acciones-recibo.component.css']
})
export class AccionesReciboComponent implements OnInit{

  idRegistro:any;
  registro:any;

  constructor(private router:Router, private aRoute:ActivatedRoute, private andService:AndService){}

  ngOnInit(): void {
    this.idRegistro = this.aRoute.snapshot.paramMap.get('idRegistro');
    console.log(this.idRegistro);
    this.andService.obtenerRegistroByID(this.idRegistro).subscribe(
      (data) =>{
        console.log(data);
        this.registro = data;
      }
    );
  }
  generarAccionCompraMM(idRegistro:any){
    this.andService.generarTiempoCompraMM(idRegistro).subscribe(
      (data) =>{
        this.router.navigate(['/recibo/registros']);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  generarAccionTransito(idRegistro:any){
    this.andService.generarTiempoTransito(idRegistro).subscribe(
      (data) =>{
        this.router.navigate(['/recibo/registros']);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  generarAccionReciboL(idRegistro:any){
    this.andService.generarTiempoTransito(idRegistro).subscribe(
      (data) =>{
        this.router.navigate(['/recibo/registros']);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
}
