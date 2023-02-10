import { Component, OnInit } from '@angular/core';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.css']
})
export class ItemAdminComponent implements OnInit{

  items:any=[];

  constructor(private andService:AndService){}

  ngOnInit(): void {
    this.andService.listaItems().subscribe(
      (data) =>{
        this.items=data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
