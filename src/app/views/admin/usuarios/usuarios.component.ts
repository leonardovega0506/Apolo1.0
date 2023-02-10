import { Component, OnInit } from '@angular/core';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  users:any=[];

  constructor(private andService:AndService){}

  ngOnInit(): void {
    this.andService.listaUsuarios().subscribe(
      (data) =>{
        this.users= data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
