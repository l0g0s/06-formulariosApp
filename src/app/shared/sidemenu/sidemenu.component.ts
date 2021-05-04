import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li,h6 {
        cursor:pointer;
      }
      #mimenu {
        height:100%
      } 
    `
  ]
})
export class SidemenuComponent {
  
  graficasMenu: MenuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barras' },
    { ruta: '/graficas/barra-doble', texto: 'Barras Dobles' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona Http' },
  ];


  mapasMenu: MenuItem[] = [
    { ruta: './mapas/fullscreen', texto: 'FullScreen' },
    { ruta: './mapas/zoom-range', texto: 'Zoom Range' },
    { ruta: './mapas/marcadores', texto: 'Marcadores' },
    { ruta: './mapas/propiedades',texto: 'Propiedades'},
  ];

  lifecycleMenu: MenuItem[] = [
    { texto: 'LifeCycle', ruta: './lifecycle' },
  ];

  selectorMenu: MenuItem[] = [
    { texto: 'Selectors', ruta: './selector' },
  ];

  templateMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './template/basicos' },
    { texto: 'Dinámicos', ruta: './template/dinamicos' },
    { texto: 'Switches', ruta: './template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { texto: 'Básicos', ruta: './reactive/basicos' },
    { texto: 'Dinámicos', ruta: './reactive/dinamicos' },
    { texto: 'Switches', ruta: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    { texto: 'Registro', ruta: './auth/registro' },
    { texto: 'Login',    ruta: './auth/login'    },
  ];

}
