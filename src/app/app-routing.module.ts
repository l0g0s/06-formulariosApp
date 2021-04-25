import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  { path: '**', redirectTo: 'selector' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
