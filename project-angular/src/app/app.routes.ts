import { Routes } from '@angular/router';
import { MicomponenteComponent} from './components/micomponente/micomponente.component'


export const routes: Routes = [

    {
        path: 'ini',
        component: MicomponenteComponent,
       // canActivate: [IdentityGuard]
    },
  
  ]