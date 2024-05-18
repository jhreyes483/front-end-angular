import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /* se debe cargar este modulo*/
import { AppComponent } from './app.component';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import{ PaginaPruebaComponent } from './components/pagina-prueba/pagina-prueba.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasFComponent } from './components/peliculas-f/peliculas-f.component';
import { EsParPipe } from './pipes/espar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    ErrorComponent,
    PeliculasComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SidevarComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaPruebaComponent,
    PeliculaComponent,
    PeliculasFComponent,
    EsParPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, /* se debe cargar este modulo*/
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
