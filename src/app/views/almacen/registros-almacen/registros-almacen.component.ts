import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-registros-almacen',
  templateUrl: './registros-almacen.component.html',
  styleUrls: ['./registros-almacen.component.css']
})
export class RegistrosAlmacenComponent implements OnInit {

  constructor(private router: Router, private andService: AndService) { }

  ngOnInit(): void {
    this.andService.listarRegistros().subscribe(
      (data) => {
        this.registros = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  registros: any = [];

  accionesRegistro(idRegistro: any) {
    this.router.navigate(['/almacen/acciones-almacen', idRegistro]);
  }


}
