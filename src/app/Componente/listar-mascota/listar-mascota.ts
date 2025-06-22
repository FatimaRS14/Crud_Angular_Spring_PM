import { Component, OnInit } from '@angular/core';
import { Ws } from '../../Service/ws';
import { Mascota } from '../Mascota/Mascota';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    m = new Mascota();
    activarPeticionListarM(){
      this.service.listarM().subscribe(respuesta =>{
        console.log(JSON.stringify(respuesta));
        this.mascotas = respuesta;
      })
    }

    guardarM(){
      this.router.navigate(['guardarM']);
    }

    editarM(idMascota: number){
      localStorage.setItem("idMascota", idMascota.toString());
      this.router.navigate(['editarM']);
    }

    eliminarM(idMascota: number) {
      this.m.idMascota = idMascota;
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
          title: "Eliminar",
          text: "¿Seguro que quieres eliminar?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.service.eliminarM(this.m).subscribe({
              next: () => {
                this.activarPeticionListarM();
                swalWithBootstrapButtons.fire({
                  title: "¡Eliminado!",
                  text: "La mascota se eliminó correctamente.",
                  icon: "success"
                });
              },
              error: (err) => {
                console.error("Error al eliminar la mascota:", err);
                Swal.fire("Error", "No se pudo eliminar la mascota.", "error");
              }
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelado",
              text: "Tu lista sigue normal :)",
              icon: "error"
            });
          }
        });
      }
}
