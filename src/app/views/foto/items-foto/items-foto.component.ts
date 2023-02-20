import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-items-foto',
  templateUrl: './items-foto.component.html',
  styleUrls: ['./items-foto.component.css']
})
export class ItemsFotoComponent implements OnInit{

  //Atributos
  items:any=[];
  itemCodeBuscar:any;
  item:any;

  //Constructor
  constructor(private router:Router,private andService:AndService,private modal:NgbModal){}

  //Inicio del componente
  ngOnInit(): void {
    this.andService.listaItems().subscribe(
      (data) =>{
        this.items = data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  //Ruta para ir a los detalles del item
  detalles(itemCode:any){
    console.log(itemCode);
    this.router.navigate(['/foto/detalle-item',itemCode]);
  }

  //Metodo para buscar el producto por itemCode
  buscarItemCode(){
    Swal.fire({
      icon: 'question',
      title: "Buscar Orden",
      text: "¿Desea buscar la Orden?",
      showCancelButton: true,
      confirmButtonColor: '#3CC3C8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar'
    }).then(
      (e) =>{
        if(e.isConfirmed){
          this.andService.obtenerItemByItemCode(this.itemCodeBuscar).subscribe(
            (data) =>{
            this.item = data;
            alert("Item buscado: "+this.item.itemCode +" \n" +this.item.itemName);
            },
            (error) =>{
              console.log(error);
            }
          );
        }
      }
    );

  }

  //Abrir ventana modal para buscar item
  open(agregarItem) {
    this.modal.open(agregarItem, { centered: true });
  }

}
