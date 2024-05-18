import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas-f',
  templateUrl: './peliculas-f.component.html',
  styleUrl: './peliculas-f.component.css'
})
export class PeliculasFComponent {
  public peliculas;
  public title: string;
  public homeText: string;
  public mostrarPeliculas: boolean;
  constructor() {
    this.title = "Peliculas"
    this.homeText = "Peliculas"

    this.mostrarPeliculas = true;
    console.log("constructor lanzado")

    this.peliculas = [
      { title: "Spiderman 4", year: 2019, image: 'https://th.bing.com/th/id/R.d17cc58293cb178da4fc9750fc475e99?rik=iSj4Eqc%2fxPGTSg&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2018%2f08%2f3D-Spiderman-Wallpaper.jpg&ehk=GtX2aYyDGrrAPJCZGDQTrjF4trnDqNcASbjoz8mREa4%3d&risl=&pid=ImgRaw&r=0' },
      { title: "Los vengadores", year: 2018, image: 'https://th.bing.com/th/id/OIP.uPmCo384ICpN0xgkuky4VQHaEo?rs=1&pid=ImgDetMain' },
      { title: "Batman vx Superman", year: 2011, image: 'https://th.bing.com/th/id/R.f508268e32a18181eefb6ae646e3772d?rik=ATqKWlMkCkH1%2bQ&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fbatman-vs-superman-dawn-of-justice-new.jpg&ehk=5BjjOVO43E6h%2fHUdV0i3ElLiD8jcTWc47gApdbC%2fSXg%3d&risl=&pid=ImgRaw&r=0' }
    ];

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

  ocualtarPelicula() {
    this.mostrarPeliculas = false;
  }
}
