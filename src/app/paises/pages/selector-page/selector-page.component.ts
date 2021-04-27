import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region  : ['', Validators.required ],
    pais    : ['', Validators.required ],
    frontera: ['', Validators.required ],
  })

  // Llenar selectores
  regiones : string[]    = PaisesService.regiones;
  paises   : PaisSmall[] = [];
  fronteras: PaisSmall[] = []

  // UI
  cargando: boolean = false;


  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {

    // Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.miFormulario.get('pais')?.reset('');
          this.paises = []
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
      )
      .subscribe( paises => {
        this.cargando = false;
        this.paises = paises;
    });

    // Cuando cambia el país
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => {
          this.cargando = true;
          this.miFormulario.get('frontera')?.reset('');
          this.fronteras = []
        }),
        switchMap( codigo => this.paisesService.getPaisPorCodigo( codigo ) ),
        switchMap( pais => this.paisesService.getPaisesPorCodigos( pais?.borders! ) )
      )
      .subscribe( paises => {
        console.log(paises)
        this.cargando = false;
        console.log(paises)
        this.fronteras = paises;
      })

  }


  guardar() {
    console.log(this.miFormulario.value);
  }

}
