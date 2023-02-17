import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-productos-almacen',
  templateUrl: './productos-almacen.component.html',
  styleUrls: ['./productos-almacen.component.css']
})
export class ProductosAlmacenComponent implements OnInit {

  //Atributos
  items: any = [];
  item: any;
  constructor(private router: Router, private andService: AndService) { }

  //Inicio del Proyecto
  ngOnInit(): void {
    //Lista de Items
    this.andService.listaItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
