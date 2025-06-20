import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Propietario } from '../Propietario/Propietario';
import { Ws } from '../../Service/ws';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.html',
  styleUrl: './editar.css'
})
export class Editar implements OnInit{
  constructor(private service: Ws, private router:Router){}

  p = new Propietario();

  ngOnInit(): void{
    //alert(localStorage.getItem("idPropietario"));
    this.buscar();
  }

  buscar(){
    this.p.idPropietario = Number(localStorage.getItem("idPropietario"));
    this.service.buscarP(this.p).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.p = data;
    })
  }

  editar(){
    this.service.editarP(this.p).subscribe(data =>{
    Swal.fire({
      title: 'EDITAR',
      text: JSON.stringify(data),
      icon: 'success',
      timer: 2500
    });
    this.router.navigate(['listar']);
    })
  }
}
