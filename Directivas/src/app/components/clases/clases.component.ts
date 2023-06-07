import { Component } from '@angular/core';

@Component({
  selector: 'clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {

  figura: string;

  constructor(){
    this.figura = 'cuad' // circ, rect, cuad  -- todas las clases del css dependen del valor de this.figura.
  }

ngOnInit() {
  setInterval(() => {this.cambiarFigura() // establecemos el intervalo en el ngOnInit y recogemos en la función
},2000);
}
cambiarFigura(){
  if (this.figura === 'cuad'){
  this.figura = 'circ'
  }else if (this.figura ==='circ'){
    this.figura = 'rect'
  }else{
    this.figura = 'cuad'
  }
}

 changeClass(figSeleccionada: string){
   this.figura = figSeleccionada  // el valor se va modificando en función del valor que pasamos en cada boton
 }
}

// Modificamos la clase activa a partir de 3 botones
//Modificar el valor de la propiedad figura en función del botón pulsado

//Cuando arranque el componente (ngOnInit) modificamos cada 3 segundos el valor de la propiedad figura
//cuad-> circ -> rect -> cuad
