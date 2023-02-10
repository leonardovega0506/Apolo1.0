import { Component, OnInit } from '@angular/core';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-registros-completos',
  templateUrl: './registros-completos.component.html',
  styleUrls: ['./registros-completos.component.css']
})
export class RegistrosCompletosComponent implements OnInit{

  registros:any=[];

  ngOnInit(): void {
    this.anandaService.listarRegistros().subscribe(
      (datos:any)=>{
        this.registros = datos;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  constructor(private anandaService:AndService){}

}
