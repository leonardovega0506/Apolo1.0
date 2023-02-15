import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-asignar-producto-admin',
  templateUrl: './asignar-producto-admin.component.html',
  styleUrls: ['./asignar-producto-admin.component.css']
})
export class AsignarProductoAdminComponent implements OnInit{

  idOrden=0;

  orden:any;

  itemCode:any;
  cantidad:any;
  precio:any;
  verificacion=false;
  itemTraido?:any;
  errorMsg?:any;
  asignacion:boolean=false;

  constructor(private andService:AndService,private aRoute:ActivatedRoute, private router:Router,private modal:NgbModal){}

  ngOnInit(): void {
    this.idOrden = this.aRoute.snapshot.params['id'];
    this.andService.obtenerOrdenById(this.idOrden).subscribe(
      (data) =>{
        if(data!=null){
        this.orden=data;
        }
        else{
          this.openVentanaCrear(data);
        }
      },
      (error) =>{
        console.log(error);
      }
    );

  }
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }
  openVentanaCrear(crear) {
    this.modal.open(crear, { centered: true });
  }
  
  agregarOrden(){
    if(document.getElementById('resurtidoSi')){
      this.andService.agregarItemR(this.itemCode,this.cantidad,this.precio,this.idOrden).subscribe(
        (data) =>{
          this.modal.dismissAll();
          this.ngOnInit();
        },
        (error) =>{
          console.log(error);
        }
      );
    }
    else if(document.getElementById('resurtidoNo')){
      this.andService.agregarItemN(this.itemCode,this.cantidad,this.precio,this.idOrden).subscribe(
        (data) =>{
          console.log(data);
        },
        (error) =>{
          console.log(error);
        }
      );
    }
  }

  agregarItem(){
    this.modal.dismissAll();
    this.router.navigate(['/admin/agregar-item']);
  }
  buscarItemCode(){
    this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
      (data)=>{

        this.itemTraido = data

      },
      (error) =>{
        this.errorMsg== error.mensaje;
        alert("No existe ese articulo");
      }
    );
  }
  asignarProductos(){
      this.asignacion=true;
  }
  regresar(){
    this.router.navigate(['admin/ordenes']);
  }
}
