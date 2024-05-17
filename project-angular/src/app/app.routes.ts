import { Routes } from '@angular/router';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BlogComponent } from './components/blog/blog.component';


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
    path: 'home',
    component: HomeComponent
  },
  {
    path :'form',
    component: FormularioComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },



  {
    path: '**',
    component: ErrorComponent,
    // canActivate: [IdentityGuard]
  },


]