import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-registros-compras',
  templateUrl: './registros-compras.component.html',
  styleUrls: ['./registros-compras.component.css']
})
export class RegistrosComprasComponent implements OnInit{
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

  constructor(private anandaService:AndService,private router:Router){}

  accionesCompras(idRegistro:any){
    console.log(idRegistro);
    this.router.navigate(['/compras/acciones-compras',idRegistro]);
  }

}
