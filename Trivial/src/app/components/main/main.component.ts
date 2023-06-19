import { Component, inject } from '@angular/core';
import { Pregunta } from '../../interfaces/pregunta.interface';
import { PreguntasService } from '../../services/preguntas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  numPreguntaActual: number;
  preguntaActual: Pregunta | undefined;
  puntuacion: number;
  //services
  PreguntasService = inject(PreguntasService);

  constructor() {
    this.numPreguntaActual = 0;
    this.puntuacion = 0;
  }

  ngOnInit() {
    this.preguntaActual = this.PreguntasService.getPregunta(
      this.numPreguntaActual
    );
  }

  onRespuestaSeleccionada($event: string) {
    if (this.preguntaActual?.correcta === $event) {
      //CON LA " ? " EVITAMOS EL UNDEFINED
      console.log('respuesta correcta');
      this.puntuacion += this.preguntaActual.puntuacion
      console.log(this.puntuacion)
    } else {
      console.log('error!');
    }
    this.numPreguntaActual++; //continuamos con la siguiente pregunta
    this.preguntaActual = this.PreguntasService.getPregunta(
      this.numPreguntaActual
      );
    }
}
