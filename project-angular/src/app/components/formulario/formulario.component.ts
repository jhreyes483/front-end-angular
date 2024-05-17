import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public title : string;
  public homeText : string;

  constructor(){
    this.title =  'Formulario'
    this. homeText = 'Formulario'
  }
}
