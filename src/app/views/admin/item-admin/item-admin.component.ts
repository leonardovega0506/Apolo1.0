import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.css']
})
export class ItemAdminComponent implements OnInit{

  items:any=[];
  itemCodeBuscar:any;
  item:any;

  constructor(private andService:AndService,private modal:NgbModal,private router:Router){}

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
  buscarItemCode(){
    this.andService.obtenerItemByItemCode(this.itemCodeBuscar).subscribe(
      (data)=>{
        this.item = data;
        this.ngOnInit();
        alert("Producto Buscado: "+this.item.itemName);
        this.modal.dismissAll();
      },
      (error) =>{
        alert("No existe ese articulo");
        this.modal.dismissAll();
      }
    );
  }
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }
  detalles(itemCode:any){
    console.log(itemCode);
    this.router.navigate(['admin/detalle-item',itemCode]);
  }
}
