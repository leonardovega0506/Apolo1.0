import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordenes-admin',
  templateUrl: './ordenes-admin.component.html',
  styleUrls: ['./ordenes-admin.component.css']
})
export class OrdenesAdminComponent implements OnInit {
  //Atributos
  ordenes: any = [];
  ordenData = {
    docNum: '',
    docDate: '',
    docTime: '',
    docTotal: '',
    cardName: '',
    docEntry: ''
  }
  orden?: any;

  //Constructor
  constructor(private andService: AndService, private modal: NgbModal, private router: Router) { }

  //Inicio del Sistema
  ngOnInit(): void {
    this.andService.listaOrdenes().subscribe(
      (data) => {
        this.ordenes = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //Metodo para buscar orden por numero de Entrada
  buscarOrder() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Orden",
      text: "¿Desea Buscar la Orden?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.andService.obtenerOrdenByDocEntry(this.ordenData.docEntry).subscribe(
            (data: any) => {

              Swal.fire('La Orden fue traida correctamente', 'success');
              this.orden = data;
              this.modal.dismissAll();
              this.ngOnInit();
            },
            (error) => {
              Swal.fire("Error", "Error al bucsar la orden", "error");
            }
          )//Cerrar subscribe 
        }//Cerra If
      });//Cerrar then

  }

  //Metodo para abrir la ventana modal de crear orden
  openCreateOrder(ordenNueva) {
    this.modal.open(ordenNueva, { size: 'lg' });
  }
  //Metodo para abrir la ventana modal de buscar una orden
  openBuscarOrder(buscarOrden) {
    this.modal.open(buscarOrden, { size: 'sm' });
  }

  //Metodo para crear la orden
  crearOrden() {
    Swal.fire({
      icon: 'question',
      title: "Crear Orden",
      text: "¿Desea Crear la Orden?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) => {
        if (e.isConfirmed) {
          this.andService.crearOrden(this.ordenData).subscribe(
            (data: any) => {
              Swal.fire("Ordenes", "Exito al crear la orden", "success").then(
                (e) => {
                  this.ngOnInit();
                  this.modal.dismissAll();
                }
              );

            },
            (error) => {
              Swal.fire("Error", "Error al cerar orden", "error");
              console.log(error);
              this.modal.dismissAll();
            }
          );
        }
      }
    );

  }

  //Metodo para mandar la ruta de detalles
  detallesOr(id?: any) {
    this.router.navigate(['/admin/asignarProducto/', id]);
    console.log(id);
  }

}
