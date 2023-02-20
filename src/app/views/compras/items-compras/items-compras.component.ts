import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-items-compras',
  templateUrl: './items-compras.component.html',
  styleUrls: ['./items-compras.component.css']
})
export class ItemsComprasComponent implements OnInit {

  //Atributos
  items: any = [];
  itemCodeBuscar: any;
  item: any;

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Inicio del componente
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

  //Metodo para buscar por codigo
  buscarItemCode() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Producto",
      text: "¿Desea Buscar el Producto?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.andService.obtenerItemByItemCode(this.itemCodeBuscar).subscribe(
            (data) => {
              this.item = data;
              this.ngOnInit();
              Swal.fire("Productos","Producto Buscado: " + this.item.itemName,"success");
              this.modal.dismissAll();
            },
            (error) => {
              Swal.fire("Error","No existe ese articulo","error");
              this.modal.dismissAll();
            }
          );
        }
      }
    );

  }

  //Abrir ventana modal para buscar
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

  //Ruta para ir a Detalles
  detalles(itemCode: any) {
    console.log(itemCode);
    this.router.navigate(['compras/detalle-item', itemCode]);
  }
}
