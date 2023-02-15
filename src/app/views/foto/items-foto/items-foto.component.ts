import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-items-foto',
  templateUrl: './items-foto.component.html',
  styleUrls: ['./items-foto.component.css']
})
export class ItemsFotoComponent implements OnInit{
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
    this.router.navigate(['/foto/detalle-item',itemCode]);
  }
  buscarItemCode(){
    this.andService.obtenerItemByItemCode(this.itemCodeBuscar).subscribe(
      (data) =>{
      this.item = data;
      alert("Item buscado: "+this.item.itemCode +" \n" +this.item.itemName);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

}
