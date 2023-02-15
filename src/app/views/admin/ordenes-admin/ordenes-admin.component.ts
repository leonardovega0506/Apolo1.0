import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-ordenes-admin',
  templateUrl: './ordenes-admin.component.html',
  styleUrls: ['./ordenes-admin.component.css']
})
export class OrdenesAdminComponent implements OnInit{

  ordenes:any=[];

  ordenData ={
    docNum:'',
    docDate:'',
    docTime:'',
    docTotal:'',
    cardName:'',
    docEntry:''
  }
  orden?:any;

  constructor(private andService:AndService,private modal:NgbModal,private router:Router) {}

  ngOnInit(): void {
    this.andService.listaOrdenes().subscribe(
      (data)=>{
        this.ordenes = data;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  buscarOrder(){
    this.andService.obtenerOrdenByDocEntry(this.ordenData.docEntry).subscribe(
      (data:any) =>{
        this.orden = data;
        this.modal.dismissAll();
      },
      (error) =>{
        console.log(error);
        alert(" existe la orden de compra");
        this.modal.dismissAll();
      }
    )
  }
  openCreateOrder(ordenNueva) {
    this.modal.open(ordenNueva, { size: 'lg' });
  }

  openBuscarOrder(buscarOrden) {
    this.modal.open(buscarOrden, { size: 'sm' });
  }
  crearOrden(){
    this.andService.crearOrden(this.ordenData).subscribe(
      (data:any) =>{
        this.ngOnInit();
        this.modal.dismissAll();
      },
      (error) =>{
        console.log(error);
        this.modal.dismissAll();
      }
    );
  }
  detallesOr(id?:any){
    this.router.navigate(['/admin/asignarProducto/',id]);
    console.log(id);
  }

}
