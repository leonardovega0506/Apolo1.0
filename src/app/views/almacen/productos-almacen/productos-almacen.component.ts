import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-productos-almacen',
  templateUrl: './productos-almacen.component.html',
  styleUrls: ['./productos-almacen.component.css']
})
export class ProductosAlmacenComponent implements OnInit{


  items:any=[];
  item:any;
  constructor(private router:Router, private andService:AndService){}

  ngOnInit(): void {
    this.andService.listaItems().subscribe(
      (data) =>{
        this.items=data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
