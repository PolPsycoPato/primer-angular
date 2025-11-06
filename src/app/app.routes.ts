import { Routes } from '@angular/router';

export const routes: 

Routes = [
    {path: '', loadComponent: ()=>import('./components/home/home').then((h)=>h.Home)},
    {path: 'deportes', loadComponent: () => import('./components/deportes/deportes').then((d)=>d.Deportes)},
    {path: 'formulario', loadComponent:()=> import('./components/formularios/formularios').then((f)=>f.Formularios)},
    {path: 'hooks', loadComponent: ()=> import('./components/hooksangularcomponent/hooksangularcomponent').then((h)=>h.Hooksangularcomponent)}

];
