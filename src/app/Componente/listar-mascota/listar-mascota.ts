import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Mascota } from '../Mascota/Mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-mascota',
  imports: [],
  templateUrl: './listar-mascota.html',
  styleUrl: './listar-mascota.css'
})
export class ListarMascota implements OnInit{
    constructor(private service: Ws, private router: Router){}

    ngOnInit(): void{
      this.activarPeticionListarM();
    }

    mascotas !: Mascota[];

    activarPeticionListarM(){
      this.service.listarM().subscribe(respuesta =>{
        console.log(JSON.stringify(respuesta));
        this.mascotas = respuesta;
      })
    }

    guardarM(){
      this.router.navigate(['guardarM']);
    }

}
