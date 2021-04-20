import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

interface Persona {
  nombre:string,
  favoritos: Favoritos[]
}

interface Favoritos {
  id:number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre: [ '', [Validators.required,Validators.minLength(3)]]
  })

  persona: Persona = {
    nombre:"aaa",
    favoritos:[{id:1,nombre:"metal"}]
  }

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:""
    })
  }

  campoValido(campo:string): boolean{
    return this.miFormulario.controls[campo].invalid
        && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset()

  }  

}
