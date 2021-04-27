import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LifecycleComponent } from './lifecycle.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';
import { CommonModule } from '@angular/common';
import { LifecycleRoutingModule } from './lifecycle-routing.module';

@NgModule({
  declarations: [
    LifecycleComponent,
    Pagina1Component,
    MuestraNombreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LifecycleRoutingModule
  ],
  providers: [],
  bootstrap: [LifecycleComponent]
})
export class LifecycleModule { }
