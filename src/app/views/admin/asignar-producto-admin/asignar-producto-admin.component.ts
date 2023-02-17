import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

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

  //Metodo para agregar un producto
  agregarItem() {
    this.modal.dismissAll();
    this.router.navigate(['/admin/agregar-item']);
  }

  //Metodo para Buscar un item por itemCode
  buscarItemCode() {
    this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
      (data) => {

        this.itemTraido = data

      },
      (error) => {
        this.errorMsg == error.mensaje;
        alert("No existe ese articulo");
      }
    );
  }

  //Metodo para abrir el div del detalle de la orden
  asignarProductos() {
    this.asignacion = true;

  }

  //Metodo para buscar la orden
  buscarOrder() {
    this.andService.asignarOrden(this.ordenData.docEntry, this.idOrden).subscribe(
      (data) => {
        this.ngOnInit();
        this.modal.dismissAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Metodo para regresar al listado de ordenes
  regresar() {
    this.router.navigate(['admin/ordenes']);
  }
}
