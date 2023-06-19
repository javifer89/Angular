import { Component, Input } from '@angular/core';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
@Input() texto: string;

constructor(){
  this.texto = '';
}


}
