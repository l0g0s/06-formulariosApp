import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  get emailErrorSpan(): string {
    const errors = this.miFormulario.get('email')?.errors
    if(errors?.required) {
      return "el email requerido"
    }
    if(errors?.pattern) {
      return "el email tiene un formato incorrecto"
    }
    if(errors?.emailTomado) {
      return "el email ya existe"
    }
    return "x"
  }

  miFormulario: FormGroup = this.fb.group({
    nombre   : [ '' , [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ] ],
    email    : [ '' , [ Validators.required, Validators.pattern(this.vs.emailPattern) ], [ this.ev ] ],
    username : [ '' , [ Validators.required, this.vs.noPuedeSerStrider ] ],
    password : [ '' , [ Validators.required, Validators.minLength(6) ] ],
    password2: [ '' , [ Validators.required ] ],
  }, {
    validators: [ this.vs.camposIguales('password','password2') ]
  })
  
  constructor( private fb: FormBuilder ,
               private vs: ValidatorService,
               private ev: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre   : 'Mr x',
      email    : 'e@test.com',
      username : 'strider2',
      password : '123456a',
      password2: '123456a',
    })
  }

  campoNoValido( campo: string ) {
    return    this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched
  }

  guardar(){
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log("guardado ",this.miFormulario.value)
  }

}
