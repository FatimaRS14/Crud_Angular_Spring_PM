import { Routes } from '@angular/router';
import { Listar } from './Componente/listar/listar';
import { Guardar } from './Componente/guardar/guardar';
import { Editar } from './Componente/editar/editar';
import { ListarMascota } from './Componente/listar-mascota/listar-mascota';
import { GuardarMascota } from './Componente/guardar-mascota/guardar-mascota';

export const routes: Routes = [
    //Reutas para navegar a los diferentes componentes y vistas
    {
         path: 'listar',
         component:Listar
    },
    { 
        path: 'guardar',
        component:Guardar
    },
    {
        path: 'editar',
        component:Editar
    },
    {
        path: 'listarM',
        component:ListarMascota
    },
    {
         path: 'guardarM',
         component:GuardarMascota
    }
];
