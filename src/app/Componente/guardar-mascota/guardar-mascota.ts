import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Mascota } from '../Mascota/Mascota';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Propietario } from '../Propietario/Propietario';

@Component({
  selector: 'app-guardar-mascota',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './guardar-mascota.html',
  styleUrl: './guardar-mascota.css'
})
export class GuardarMascota implements OnInit{
  constructor(private service:Ws, private router: Router){}
  propietarios : Propietario[] = [];
  m = new Mascota();

  // ngOnInit(): void {
  //   this.service.listarP().subscribe(data =>{
  //     this.propietarios = data;
  //   });
  // }
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
  }
  //Esto es para convertir al formato que necesita el json
  propietarioIdSolo: number = 0;
 guardarM() {
  // Esto es para validar que el propietario seleccionado sea válido
  if (!this.propietarioIdSolo || this.propietarioIdSolo <= 0) {
    Swal.fire({
      title: "Error",
      icon: "warning",
      text: "Por favor, selecciona un propietario válido.",
      showConfirmButton: true
    });
    return;
  }

  this.m.propietarioId = { idPropietario: this.propietarioIdSolo };

  this.service.guardarM(this.m).subscribe({
    next: (respuesta) => {
      Swal.fire({
        title: "GUARDADO",
        text: "Mascota registrada correctamente",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
      // Swal.fire({
      //   title: "GUARDADO",
      //   icon: "success",
      //   text: "Mascota registrada correctamente",
      //   showConfirmButton: false,
      //   timer: 2000
      // });
      this.router.navigate(['listarM']);
    },
    error: (error) => {
      console.error('Error al guardar mascota:', error);
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error?.error?.mensaje || 'Ocurrió un error al guardar la mascota.',
        showConfirmButton: true
      });
    }
  });
}

}
