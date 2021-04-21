import { Component } from '@angular/core';

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
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }

  agregarJuego() {
    if(!this.nuevoJuego.trim().length) return

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego.trim()
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('formulario posteado');
  }
}
