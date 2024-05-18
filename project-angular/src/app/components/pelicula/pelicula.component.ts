import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  @Input() pelicula: any;
  @Output() MarcarFavorita = new EventEmitter();

  seleccionar(event: any, pelicula: any) {
    this.MarcarFavorita.emit({
      pelicula: pelicula
    })
  }

}
