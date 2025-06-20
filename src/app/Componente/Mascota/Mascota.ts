import { Propietario } from "../Propietario/Propietario";

export class Mascota{
    idMascota !: number;
    nombreMascota !: String;
    especie !: String;
    edadMascota !: number;
    propietarioId !: Propietario;
}