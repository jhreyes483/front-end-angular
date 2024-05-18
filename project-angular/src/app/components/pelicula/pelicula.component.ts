import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  @Input() pelicula : any ;

}
