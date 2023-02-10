import { Component, OnInit } from '@angular/core';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-ordenes-admin',
  templateUrl: './ordenes-admin.component.html',
  styleUrls: ['./ordenes-admin.component.css']
})
export class OrdenesAdminComponent implements OnInit{

  ordenes:any=[];

  constructor(private andService:AndService) {}

  ngOnInit(): void {
    this.andService.listaOrdenes().subscribe(
      (data)=>{
        this.ordenes = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
