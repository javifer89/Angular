import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {

  @Input() segundos : number;

  constructor(){
    this.segundos = 0;
  }

  convertirSegundos(segundos : number){

  }
}
