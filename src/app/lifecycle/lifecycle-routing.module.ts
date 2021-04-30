import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'lifecycle', component: LifecycleComponent },
        { path: '**', redirectTo: 'lifecycle' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleRoutingModule { }
