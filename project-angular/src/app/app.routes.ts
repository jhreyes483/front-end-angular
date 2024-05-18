import { Routes } from '@angular/router';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BlogComponent } from './components/blog/blog.component';
import { PaginaPruebaComponent } from './components/pagina-prueba/pagina-prueba.component';
import { PeliculasFComponent } from './components/peliculas-f/peliculas-f.component';


export const routes: Routes = [

  {
    path: 'ini',
    component: MicomponenteComponent,
    // canActivate: [IdentityGuard]
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
    // canActivate: [IdentityGuard]
  },
  {
    path: 'peliculas-f',
    component: PeliculasFComponent,
    // canActivate: [IdentityGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormularioComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'pagina/:id',
    component: PaginaPruebaComponent
  },



  {
    path: '**',
    component: ErrorComponent,
    // canActivate: [IdentityGuard]
  },


]