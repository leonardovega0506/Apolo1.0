import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.css']
})
export class ItemAdminComponent implements OnInit {
  //Atributos
  items: any = [];
  itemCodeBuscar: any;
  item: any;

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Inicio del componenete
  ngOnInit(): void {
    this.andService.listaItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Metodo para buscar un producto
  buscarItemCode() {
    this.andService.obtenerItemByItemCode(this.itemCodeBuscar).subscribe(
      (data) => {
        this.item = data;
        this.ngOnInit();
        alert("Producto Buscado: " + this.item.itemName);
        this.modal.dismissAll();
      },
      (error) => {
        alert("No existe ese articulo");
        this.modal.dismissAll();
      }
    );
  }

  //Abrir ventana modal para buscar producto
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

  //Ruta para ir a detalle
  detalles(itemCode: any) {
    console.log(itemCode);
    this.router.navigate(['admin/detalle-item', itemCode]);
  }
}
