import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-items-recibo',
  templateUrl: './items-recibo.component.html',
  styleUrls: ['./items-recibo.component.css']
})
export class ItemsReciboComponent implements OnInit{
  items:any=[];
  itemCodeBuscar:any;
  item:any;

  constructor(private router:Router,private andService:AndService,private modal:NgbModal){}

  ngOnInit(): void {
    this.andService.listaItems().subscribe(
      (data) =>{
        this.items = data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  detalles(itemCode:any){
    console.log(itemCode);
    this.router.navigate(['/recibo/detalle-item',itemCode]);
  }
  buscarItemCode(){
    this.andService.obtenerItemByItemCode(this.itemCodeBuscar).subscribe(
      (data) =>{
      this.item = data;
      alert("Item buscado: "+this.item.itemCode +" \n" +this.item.itemName);
      this.modal.dismissAll();
      },
      (error) =>{
        console.log(error);
        alert("El Articulo con este codigo no existe, favor de verificar");
        this.modal.dismissAll();
      }
    );
  }
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

}
