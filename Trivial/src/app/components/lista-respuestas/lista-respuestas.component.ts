import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lista-respuestas',
  templateUrl: './lista-respuestas.component.html',
  styleUrls: ['./lista-respuestas.component.css']
})
export class ListaRespuestasComponent {

  @Input() respuestas: string[]
  @Input() respuestaAlert: string

  @Output() enviarRespuesta: EventEmitter<string>;

  constructor() {
    this.respuestas = []
    this.enviarRespuesta = new EventEmitter()
    this.respuestaAlert = ''
  }

  respuestaSeleccionada(respuesta: string) {
    this.enviarRespuesta.emit(respuesta)
  }

  mostrarAlerta() {
    setTimeout(() => {
      
    }, 3000);

  }
}
