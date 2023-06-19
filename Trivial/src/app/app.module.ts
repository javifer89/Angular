import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ListaRespuestasComponent } from './components/lista-respuestas/lista-respuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreguntasComponent,
    ListaRespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
