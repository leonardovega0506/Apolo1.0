import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-acciones-foto',
  templateUrl: './acciones-foto.component.html',
  styleUrls: ['./acciones-foto.component.css']
})
export class AccionesFotoComponent implements OnInit{

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
  generarAccion(idRegistro:any){
    this.andService.generarTiempoFoto(idRegistro).subscribe(
      (data) =>{
        this.router.navigate(['/foto/registros']);
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
