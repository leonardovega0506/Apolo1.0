import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordenes-compras',
  templateUrl: './ordenes-compras.component.html',
  styleUrls: ['./ordenes-compras.component.css']
})
export class OrdenesComprasComponent implements OnInit {

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


  //Inicio del Componente
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

  //Metodo para buscar la orden
  buscarOrder() {
    Swal.fire({
      icon: 'question',
      title: "Buscar Orden",
      text: "¿Desea Buscar La Orden?",
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
              this.orden = data;
              this.modal.dismissAll();
            },
            (error) => {
              console.log(error);
              Swal.fire("Error","No existe la orden de compra","error");
              this.modal.dismissAll();
            }
          );
        }
      }
    );

  }

  //Abrir ventana modal para crear orden
  openCreateOrder(ordenNueva) {
    this.modal.open(ordenNueva, { size: 'lg' });
  }

  //Abrir ventana modal para buscar orden
  openBuscarOrder(buscarOrden) {
    this.modal.open(buscarOrden, { size: 'sm' });
  }

  //Metodo para crear una orden
  crearOrden() {
    if(this.ordenData.cardName == "" || this.ordenData.docDate == "" || this.ordenData.docEntry == ""|| this.ordenData.docNum == "" ||this.ordenData.docTime == "" ||this.ordenData.docTotal == ""){
      Swal.fire("Error","Por favor rellene todos los campos","warning");
    }
    else{
    Swal.fire({
      icon: 'question',
      title: "Crear Orden",
      text: "¿Desea Crear La Orden?\nRecuerda que este proceso no va a SAP tienes que crearlo tambien ahí",
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
              this.ngOnInit();
              this.modal.dismissAll();
            },
            (error) => {
              console.log(error);
              this.modal.dismissAll();
            }
          );
        }
      }
    );
    }

  }

  //Ruta para ir a los detalles de la orden
  detallesOr(id?: any) {
    this.router.navigate(['/compras/asignarProducto/', id]);
    console.log(id);
  }
}
