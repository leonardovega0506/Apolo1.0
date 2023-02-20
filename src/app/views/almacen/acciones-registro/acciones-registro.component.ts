import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-acciones-registro',
  templateUrl: './acciones-registro.component.html',
  styleUrls: ['./acciones-registro.component.css']
})
export class AccionesRegistroComponent implements OnInit {
  //Atribustos
  idRegistro: any;
  registro: any;

  //Constructor
  constructor(private andService: AndService, private router: Router, private aRoute: ActivatedRoute) {

  }
  
  //Inicio del Componente
  ngOnInit(): void {
    this.idRegistro = this.aRoute.snapshot.paramMap.get('idRegistro');
    this.andService.obtenerRegistroByID(this.idRegistro).subscribe(
      (data) => {
        this.registro = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Accion hacia el servicio de and
  generarAccion(idRegistro: any) {
    this.andService.generarTiempoAlmacen(idRegistro).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['almacen/registros']);
        this.ngOnInit();
      }
    );
  }
}
