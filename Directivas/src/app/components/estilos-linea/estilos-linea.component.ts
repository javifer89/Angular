import { Component } from '@angular/core';

@Component({
  selector: 'estilos-linea',
  templateUrl: './estilos-linea.component.html',
  styleUrls: ['./estilos-linea.component.css']
})
export class EstilosLineaComponent {
estilosParrafo: any;

constructor() {
  this.estilosParrafo = {
    color: 'red',
    backgroundColor: 'blue'
  }
}

ngOnInit() {
  setInterval(() => {this.mostrarParrafo() // establecemos el intervalo en el ngOnInit y recogemos en la función 
},3000);
}

cambiarColor(pColor1: string){
 this.estilosParrafo.color = pColor1;
}

onChange($event: any){// recogemos la información que nos da el RANGE y la pasamos al fontSize de thisparrafo junto los 'px' para poder modificar el tamaño del texto
   this.estilosParrafo.fontSize = $event.target.value + 'px'; // `${$event.target.value}px` igual con template literal
  console.log(this.estilosParrafo)
}

changePadding($event: any){
  this.estilosParrafo.padding =$event.target.value + 'px';
}

mostrarParrafo(){
  if (this.estilosParrafo.visibility === 'hidden'){
    this.estilosParrafo.visibility = 'visible';
  }else{
    this.estilosParrafo.visibility = 'hidden';
  }
}

}
//Vamos a cambiar el color del texto en función de 3 botones (rojo, azul y verde)
//1. pintar botones
//2. controlamos el click de los botones. ¿cuantas funciones necesito? 1 para cambiar colores
//3. Dentro de la función modificamos la propiedad color de los estilos del parrafo

// Modificar el backgroundColor del parrafo en función de lo que escribamos en un campo de texto.
//1.pintar campo de texto
//2. capturar lo que se introduce en el campo de texto mediante ngModel
//3. enlazamos la propiedad backgroundcolor de los estilos del parrafo con el campo de texto a través de ngModel

//Modificamos el tamaño del texto a partir de un slider
//1. Pintar el slider (input -> range)
//2. detectamos cuando cambia el slider (change / input)
//3. dentro de la función que maneja el evento modificamos el tamaño del texto en función del VALOR que nos devuelva el slider.

//Modificar el padding del párrafo en función de un campo de tipo number

//Cada 3 segundos el párrafo se muestra o se oculta
//1.Implementar ngOnInit()
//2.Crear intervalo que se ejecuta cada 3s
//3. Dentro del intervalo, modificamos la propiedad del estilosParrafo que nos permita mostrar/ocultar el párrafo
