import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PropietarioMascotaCrud';

  //Instanciar las rutas de la clase routes
  constructor(private router:Router){
    
  }

  listar(){
    
    this.router.navigate(['listar']);
  }

  listarM(){
    this.router.navigate(['listarM']);
  }


}
