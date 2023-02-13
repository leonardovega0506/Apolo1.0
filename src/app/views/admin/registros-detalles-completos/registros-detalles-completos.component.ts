import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-registros-detalles-completos',
  templateUrl: './registros-detalles-completos.component.html',
  styleUrls: ['./registros-detalles-completos.component.css']
})
export class RegistrosDetallesCompletosComponent implements OnInit{

  constructor(private route:ActivatedRoute,private router:Router,private loginService:LoginService,private andService:AndService){}

  id =0;
  registro?:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.andService.obtenerRegistroByID(this.id).subscribe(
      (data) =>{
        this.registro = data;
      }
    );
  }

}
