import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-producto-admin',
  templateUrl: './asignar-producto-admin.component.html',
  styleUrls: ['./asignar-producto-admin.component.css']
})
export class AsignarProductoAdminComponent implements OnInit {
  //Atributos
  idOrden = 0;
  cadenaImg: string;
  orden: any;
  ordenData = {
    docNum: '',
    docDate: '',
    docTime: '',
    docTotal: '',
    cardName: '',
    docEntry: ''
  }
  itemCode: any;
  cantidad: any;
  precio: any;
  verificacion = false;
  itemTraido?: any;
  errorMsg?: any;
  asignacion: boolean = false;

  //Constructor
  constructor(private andService: AndService, private aRoute: ActivatedRoute, private router: Router, private modal: NgbModal) { }

  //inicio del componente
  ngOnInit(): void {
    this.idOrden = this.aRoute.snapshot.params['id'];
    this.andService.obtenerOrdenById(this.idOrden).subscribe(
      (data) => {
        if (data != null) {
          this.orden = data;
        }
        else {
          this.openVentanaCrear(data);
        }
      },
      (error) => {
        console.log(error);
      }
    );

  }

  //Abrir ventana modal para agregar el item
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

  //Abrir ventana modal para crear Orden
  openVentanaCrear(crear) {
    this.modal.open(crear, { centered: true });
  }

  //Abrir ventana Modal para buscar Orden
  openBuscarOrden(buscarOrden) {
    this.modal.open(buscarOrden, { centered: true });
  }

  //Metodo para asignar una orden desde SAP
  agregarOrden() {
    Swal.fire({
      icon: 'question',
      title: "Agregar Orden",
      text: "¿Desea Agregar Orden?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          if (document.getElementById('resurtidoSi')) {
            this.andService.agregarItemR(this.itemCode, this.cantidad, this.precio, this.idOrden).subscribe(
              (data) => {
                this.modal.dismissAll();
                this.ngOnInit();
              },
              (error) => {
                console.log(error);
              }
            );
          }
          else if (document.getElementById('resurtidoNo')) {
            this.andService.agregarItemN(this.itemCode, this.cantidad, this.precio, this.idOrden).subscribe(
              (data) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        }
      }
    );

  }

  //Metodo para agregar un producto
  agregarItem() {
    this.modal.dismissAll();
    this.router.navigate(['/admin/agregar-item']);
  }

  //Metodo para Buscar un item por itemCode
  buscarItemCode() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Producto",
      text: "¿Desea Buscar el producto?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
            (data) => {

              this.itemTraido = data

            },
            (error) => {
              this.errorMsg == error.mensaje;
              Swal.fire('Error al Buscar', "Error", "error")
            }
          );
        }
      }
    )

  }

  //Metodo para abrir el div del detalle de la orden
  asignarProductos() {
    this.asignacion = true;
  }

  //Metodo para buscar la orden
  buscarOrder() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Orden",
      text: "¿Desea Buscar la orden?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.andService.asignarOrden(this.ordenData.docEntry, this.idOrden).subscribe(
            (data) => {
              this.ngOnInit();
              this.modal.dismissAll();
              this.andService.andStatus.next(true);
            },
            (error) => {
              Swal.fire('Error',"Error al bucsar orden","error");
            }
          );
        }
      }
    )

  }

  //Metodo para regresar al listado de ordenes
  regresar() {
    this.router.navigate(['admin/ordenes']);
  }
}
