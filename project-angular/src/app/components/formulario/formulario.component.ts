import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public title : string;
  public homeText : string;
  
  public isSubmit : any;
  public status : any;
  public user : any;
  public campo : any;
  constructor(){
    this.title    = 'Formulario'
    this.homeText = 'Formulario'
    this.user     = new User('','','','')
    this.isSubmit = false;
    this.campo = '';
    
  }

  onSubmit(registerForm : any){
    console.log(this.user)
  }

  hasDadoClick(){
    console.log('has dado click')
  }

  hasSalido(){
    /* cuando se sali de un input */
    console.log('has salido blur')
  }

  onKeyUp(){
    console.log('keyUp has pulsado el enter')
  }
}
