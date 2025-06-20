import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Propietario } from '../Componente/Propietario/Propietario';
import { Mascota } from '../Componente/Mascota/Mascota';

@Injectable({
  providedIn: 'root'
})
export class Ws {
  //este archivo creara las peticiones para enviarlas al WS(Servidor)
  constructor(private http: HttpClient) { }
//peticion para listar
  url = "http://localhost:8010/api/p";
  listarP(){
    return this.http.get<Propietario[]>(this.url + "/listar");
  }

  guardarP(p: Propietario){
    return this.http.post<String>(this.url + "/guardar", p);
  }

  buscarP(p: Propietario){
    return this.http.post<Propietario>(this.url + "/buscar" ,p);

  }

  editarP(p: Propietario){
    return this.http.put<String>(this.url + "/editar", p);
  }

  urlm = "http://localhost:8010/api/mascota";

  listarM(){
    return this.http.get<Mascota[]>(this.urlm + "/listar");
    
  }

  guardarM(m: Mascota){
    return this.http.post<String>(this.urlm + "/guardar", m);
  }

  buscarM(m: Mascota){
    return this.http.post<Mascota>(this.urlm + "/buscar", m);
  }

  editarM(m: Mascota){
    return this.http.put<String>(this.urlm + "/editar", m);
  }


}
