import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Propietario } from '../Propietario/Propietario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar implements OnInit{
  //inyectar el service
  constructor(private service: Ws, private router:Router){}

  ngOnInit(): void {
    this.activarPeticionListrar();
  }

  //Instanciar lista
  propietarios !: Propietario[];
  //metodo que envia la peticion al servidor
   activarPeticionListrar(){
      this.service.listarP().subscribe(respuesta =>{
        console.log(JSON.stringify(respuesta));
        this.propietarios = respuesta;
      })
   }

   //metodo para navegar guardar
   nuevo(){
    this.router.navigate(['guardar']);
   }

   editar(idPropietario: number){
    localStorage.setItem("idPropietario", idPropietario.toString());
    this.router.navigate(['editar']);
   }

}
