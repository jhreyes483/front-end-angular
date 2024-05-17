import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public  title : string;
  public homeText : string;
  constructor(){
    this.homeText ="Bienvenido a la home";
    this.title = 'Ultimos articulos';
  }

}
