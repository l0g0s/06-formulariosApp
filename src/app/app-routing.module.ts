import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule )
  },
  { 
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasModule )
  },
  { 
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then( m => m.MapasModule )
  },
  { 
    path: 'lifecycle',
    loadChildren: () => import('./lifecycle/lifecycle.module').then( m => m.LifecycleModule )
  },
  { 
    path: 'selector',
    loadChildren: () => import('./paises/paises.module').then( m => m.PaisesModule )
  },
  { 
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
  },
  { 
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  { path: '**', redirectTo: 'productos' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
