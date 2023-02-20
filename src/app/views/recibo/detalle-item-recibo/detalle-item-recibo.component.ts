import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-item-recibo',
  templateUrl: './detalle-item-recibo.component.html',
  styleUrls: ['./detalle-item-recibo.component.css']
})
export class DetalleItemReciboComponent implements OnInit {
  //Atributos
  itemCode: any;
  cadenaImg: string;
  item: any;
  itemData = {
    itemCode: '',
    itemName: '',
    ncmCode: '',
    properties4: '',
    idItem: ''
  }

  //Constructor
  constructor(private aRoute: ActivatedRoute, private router: Router, private andService: AndService, private modal: NgbModal) { }

  //Inicio del componente
  ngOnInit(): void {
    this.itemCode = this.aRoute.snapshot.paramMap.get('itemCode');
    this.andService.obtenerItemByItemCode(this.itemCode).subscribe(
      (data) => {
        console.log(data)
        this.item = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.cadenaImg = "http://104.36.166.251:5757/fotos_productos/" + this.itemCode + ".jpg";
  }

  //ruta para regresra al listado
  regresar() {
    this.router.navigate(['recibo/items']);
  }
}
