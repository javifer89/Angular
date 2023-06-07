import { Component } from '@angular/core';

@Component({
  selector: 'condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent {

  mostrar: boolean;

  constructor(){
    this.mostrar = true;
  }

botonMostrar() {
  // if(this.mostrar){
  //   this.mostrar = false;
  // }else{
  //   this.mostrar = true;
  // }

  // this.mostrar =  this.mostrar ? false : true;  // TERNARIO
  this.mostrar = !this.mostrar// el ternario con booleanos, se puede hacer con TOGGLE (cambiando el valor de true a false)
}
}

//botón que al pulsarlo muestre/oculte el texto
