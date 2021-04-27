import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'lifecycle', component: Pagina1Component },
        { path: '**', redirectTo: 'lifecycle' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleRoutingModule { }
