import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from '../../../../../03-paisesApp/src/app/pipes/interfaces/pipes.interfaces';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;


  miFormulario: FormGroup = this.fb.group( {
    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    terminos: [false,Validators.requiredTrue],
  })

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(){
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
    })

    this.miFormulario.valueChanges.subscribe( ({terminos, ...restoDeAtributos}) => {
      this.persona = restoDeAtributos
    })
  }

  guardar() {
    //Opción 1
    //const formValue = {...this.miFormulario.value}
    //delete formValue.terminos
    //this.persona = formValue
    //Opción 2
    //this.persona.genero = this.miFormulario.controls.genero.value
    //this.persona.notificaciones = this.miFormulario.controls.notificaciones.value
  }
}
