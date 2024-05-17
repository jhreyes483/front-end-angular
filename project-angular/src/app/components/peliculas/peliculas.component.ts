import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements DoCheck, OnInit, OnDestroy {

  public title : string;
  public mostrarPeliculas : boolean;
  constructor() {
    this.title = "Peliculas"
    this.mostrarPeliculas =  true;
    console.log("constructor lanzado")
  }

  ngOnInit() {
    console.log("Componente iniciado")
  }

  ngDoCheck(): void {
    /*
    se ejecuta cada vez que hay un cambio en el componente
    */
    console.log("DoCheck lanzado");
  }

  cambiarTitulo() {
    this.title = "Se cambio titulo"
  }


  ngOnDestroy() {
    console.log("se lanzo el ondestroy");
  }

  ocualtarPelicula(){
    this.mostrarPeliculas = false;
  }




}
