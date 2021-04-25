import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }  
  
  miFormulario:FormGroup = this.fb.group({
    nombre: [ 'aaa', [Validators.required,Validators.minLength(3)]],
    favoritos: this.fb.array([
      this.fb.group({
        id: [ 1, [Validators.required]],
        nombre: [ "Frogger", [Validators.required]],
      }),
      this.fb.group({
        id: [ 2, [Validators.required]],
        nombre: [ "Frogger3", [Validators.required]],
      }),
    ],Validators.required),
  })

  nuevoFavorito: FormControl = this.fb.control('x',Validators.required)

  get favoritosArr() { 
    return this.miFormulario.get('favoritos') as FormArray
  }
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset(this.persona)
  }
  
  campoValido(campo:string): boolean{
    return this.miFormulario.controls[campo].invalid
        && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log("guardado")
  }  

  agregarFavorito() {
    if(this.nuevoFavorito.invalid) { return }
    this.favoritosArr.push(
        this.fb.group({
          id: [ this.favoritosArr.length+1, [Validators.required]],
          nombre: [ this.nuevoFavorito.value, [Validators.required]],
        })
      )
    this.nuevoFavorito.reset()
  }

  eliminarFavorito(i:number){
    console.log(this.favoritosArr.controls[i].value)
    this.favoritosArr.removeAt(i)
  }

}
