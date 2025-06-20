import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Router } from '@angular/router';
import { Mascota } from '../Mascota/Mascota';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Propietario } from '../Propietario/Propietario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-mascota',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-mascota.html',
  styleUrl: './editar-mascota.css'
})
export class EditarMascota implements OnInit{
  constructor(private service: Ws, private router: Router){}
  propietarios : Propietario[] = [];
  m = new Mascota();
  propietarioIdSolo: number = 0;

  ngOnInit(): void {
    this.service.listarP().subscribe({
      next: (data) => {
        console.log('Propietarios cargados:', data); 
        this.propietarios = data;
      },
      error: (error) => {
        console.error('Error al cargar propietarios:', error);
      }
    });

    this.buscarM();

  }

  buscarM(){
    this.m.idMascota = Number(localStorage.getItem("idMascota"));
    this.service.buscarM(this.m).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.m = data;

     this.propietarioIdSolo = this.m.propietarioId?.idPropietario || 0;  

    });
  }
  
  editarM(){
  console.log('editarM llamado');
  console.log('propietarioIdSolo (tipo y valor):', typeof this.propietarioIdSolo, this.propietarioIdSolo);

  const propietarioIdNum = Number(this.propietarioIdSolo);

  this.m.propietarioId = propietarioIdNum > 0
    ? { idPropietario: propietarioIdNum } as Propietario
    : null;

  console.log('Mascota a enviar:', JSON.stringify(this.m));

  this.service.editarM(this.m).subscribe({
    next: data => {
      console.log('Respuesta backend:', data);
      Swal.fire({
        title: 'EDITAR',
        text: JSON.stringify(data),
        icon: 'success',
        timer: 2500
      });
      this.router.navigate(['listarM']);
    },
    error: err => {
      console.error('Error backend:', err);
      Swal.fire({
        title: 'ERROR',
        text: 'No se pudo editar la mascota',
        icon: 'error',
        timer: 2500
      });
    }
  });
}
}
