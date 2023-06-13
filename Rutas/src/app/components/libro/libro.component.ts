import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  ActivatedRoute = inject(ActivatedRoute);

  autorId: string;
  libroId: string ;

  constructor(){
    this.autorId ='';
    this.libroId = '';
  }
  ngOnInit() {
    //me subscribo al observable "params" para recuperar los valores variables de la URL
    this.ActivatedRoute.params.subscribe(params => {
      this.autorId = params['autorId'];
      this.libroId = params['libroId'];
  });
  }

}

/**
 *1.Creamos el componente libro
 *2.ruta: autores/:autorId/libro/:libroId
 *3.Dentro del HTML del componente Libro mostrar el ID del autor y el ID del libro
 */
