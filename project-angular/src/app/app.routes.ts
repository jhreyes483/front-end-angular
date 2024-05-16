import { Routes } from '@angular/router';
import { MicomponenteComponent} from './components/micomponente/micomponente.component';
import { ErrorComponent } from './components/error/error.component';


export const routes: Routes = [

    {
        path: 'ini',
        component: MicomponenteComponent,
       // canActivate: [IdentityGuard]
    },


    {
      path: '**',
      component: ErrorComponent,
     // canActivate: [IdentityGuard]
  },

  
  ]