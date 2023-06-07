import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstilosLineaComponent } from './components/estilos-linea/estilos-linea.component';
import { FormsModule } from '@angular/forms';
import { ClasesComponent } from './components/clases/clases.component';
import { CondicionalesComponent } from './components/condicionales/condicionales.component';
import { BuclesComponent } from './components/bucles/bucles.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosLineaComponent,
    ClasesComponent,
    CondicionalesComponent,
    BuclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
