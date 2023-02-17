import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{
  //Atributos
  itemCode:any;
  cadenaImg:string;
  item:any;
  itemData={
    itemCode:'',
    itemName:'',
    ncmCode:'',
    properties4:'',
    idItem:''
  }

  //Constructor
  constructor(private aRoute:ActivatedRoute,private router:Router,private andService:AndService,private modal:NgbModal){}

  //Inicio del Componente
  ngOnInit(): void {
    this.itemCode = this.aRoute.snapshot.paramMap.get('itemCode');
    //Detalle de Orden
    this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
      (data) =>{
        console.log(data)
        this.item = data;
      },
      (error) =>{
        console.log(error);
      }
    );
    this.cadenaImg =  "http://104.36.166.251:5757/fotos_productos/"+this.itemCode+".jpg";
  }

  //Metodo para regresar el listado
  regresar(){
    this.router.navigate(['admin/items']);
  }

  //Abrir ventana modal para editar
  openEditar(itemEdit){
    this.modal.open(itemEdit, { size: 'md' });
  }

  //Metodo para actualizar un producto
  actualizarProducto(){
    this.itemData.ncmCode = this.item.ncmCode;
    this.itemData.properties4 = this.item.properties4;
    this.itemData.idItem = this.item.idItem;
    this.itemData.itemCode = this.item.itemCode;
    this.andService.actualizarItem(this.itemData).subscribe(
      (data) =>{
        Swal.fire("Productos","Producto Actualizado, correctamente","success").then(
          (e) =>{
            this.modal.dismissAll();
            this.router.navigate(['admin/items']);
          }
        );
      },
      (error)=>{
        Swal.fire("Error","Error al actualizar un producto","error");
        console.log(error);
      }
    );
  }
  
}
