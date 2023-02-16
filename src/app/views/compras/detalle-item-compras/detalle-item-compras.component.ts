import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-item-compras',
  templateUrl: './detalle-item-compras.component.html',
  styleUrls: ['./detalle-item-compras.component.css']
})
export class DetalleItemComprasComponent implements OnInit{
  itemCode:any;
  cadenaImg:string;
  item:any;
  itemData={
    itemCode:'',
    itemName:'',
    ncmCode:'',
    properties4:'',
    idItem:''
  }
  constructor(private aRoute:ActivatedRoute,private router:Router,private andService:AndService,private modal:NgbModal){}

  ngOnInit(): void {
    this.itemCode = this.aRoute.snapshot.paramMap.get('itemCode');
    this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
      (data) =>{
        console.log(data)
        this.item = data;
      },
      (error) =>{
        console.log(error);
      }
    );
    this.cadenaImg =  "http://104.36.166.251:5757/fotos_productos/"+this.itemCode+".jpg";
  }
  regresar(){
    this.router.navigate(['compras/items']);
  }
  openEditar(itemEdit){
    this.modal.open(itemEdit, { size: 'md' });
  }
  actualizarProducto(){
    this.itemData.ncmCode = this.item.ncmCode;
    this.itemData.properties4 = this.item.properties4;
    this.itemData.idItem = this.item.idItem;
    this.itemData.itemCode = this.item.itemCode;
    this.andService.actualizarItem(this.itemData).subscribe(
      (data) =>{
        alert("Producto Actualizado");
        this.modal.dismissAll();
        this.router.navigate(['compras/items']);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
