import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
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
