import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-items-recibo',
  templateUrl: './items-recibo.component.html',
  styleUrls: ['./items-recibo.component.css']
})
export class ItemsReciboComponent implements OnInit {
  //Atributos
  items: any = [];
  itemCodeBuscar: any;
  item: any;

  //Constructor
  constructor(private router: Router, private andService: AndService, private modal: NgbModal) { }

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

  //Ruta hacia los detalles
  detalles(itemCode: any) {
    console.log(itemCode);
    this.router.navigate(['/recibo/detalle-item', itemCode]);
  }

  //Metodo para buscar producto por itemCode
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
              Swal.fire("Productos", "Item buscado: " + this.item.itemCode + " \n" + this.item.itemName, "success");
              this.modal.dismissAll();
            },
            (error) => {
              console.log(error);
              Swal.fire("Error", "El Articulo con este codigo no existe, favor de verificar", "error");
              this.modal.dismissAll();
            }
          );
        }
      }
    );

  }

  //abrir ventana modal para buscar producto
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

}
