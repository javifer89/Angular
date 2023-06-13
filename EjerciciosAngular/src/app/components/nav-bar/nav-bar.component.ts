import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
@Input() colorFondo: string ;
@Input() colorEnlace: string;
@Input() opciones: string[];

@Output() opcionPulsada : EventEmitter<string>

constructor(){
  this.colorEnlace = '';
  this.colorFondo = '';
  this.opciones= ['Home', 'Projects', 'Info', 'About'];
  this.opcionPulsada = new EventEmitter()
}

seleccionarOpcion(opcion: string){
  this.opcionPulsada.emit(opcion)
}

emitirOpcion(){
}

}
