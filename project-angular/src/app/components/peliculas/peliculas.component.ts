import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements DoCheck, OnInit, OnDestroy {

  public titulo: string;
  public mostrarPeliculas : boolean;
  constructor() {
    this.titulo = "Componente peliculas"
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
    this.titulo = "Se cambio titulo"
  }


  ngOnDestroy() {
    console.log("se lanzo el ondestroy");
  }

  ocualtarPelicula(){
    this.mostrarPeliculas = false;
  }




}
