import { Component } from '@angular/core';
import { Propietario } from '../Propietario/Propietario';
import { FormsModule } from '@angular/forms';
import { Ws } from '../../Service/ws';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar',
  imports: [FormsModule],
  templateUrl: './guardar.html',
  styleUrl: './guardar.css'
})
export class Guardar {
    //Primero checar si se guarda el objeto
    constructor(private service:Ws, private router: Router){}
    p = new Propietario();

    guardar(){
      this.service.guardarP(this.p).subscribe(respuesta =>{
        Swal.fire({
          title: "GUARDAR!",
          icon: "success",
          draggable: true,
          text: JSON.stringify(respuesta),
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigate(['listar']);
      }, error =>{
        Swal.fire({
          title: "Error",
          icon: "error",
          draggable: true,
          text: JSON.stringify(error.error.mensaje),
          showConfirmButton: false,
          timer: 2500
        });
      })
    }
}
