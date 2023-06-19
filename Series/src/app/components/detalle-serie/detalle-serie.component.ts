import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERIE } from 'src/app/interfaces/serie.interface';
import { ServicioSeriesService } from 'src/app/services/servicio-series.service';
import { PersonajesService } from '../../services/personajes.service';
import { PERSONAJE } from 'src/app/interfaces/personaje.interface';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent {

  serie: SERIE | undefined;
  personajes: PERSONAJE[] 
 constructor(){
   this.personajes= []
 }
//services
activatedRoute = inject(ActivatedRoute) //para obtener rutas con contenido variable, necesitamos el Activated route
seriesService = inject(ServicioSeriesService)
PersonajesService = inject(PersonajesService)

ngOnInit() {
this.activatedRoute.params.subscribe(params => { //para recuperar los valores variables de una URL se hará de esta manera.
//Los parametros extraidos de la URL siempre tienen formato string (si necesitamos pasar por parámetro a la función un número, tendremos que pasar a número el parámetro)
this.serie = this.seriesService.getById2(parseInt(params['serieId']))
//si pongo en la URL un número de serie que existe me devuelve la serie. Si no existe me devuelve undefined
this.personajes = this.PersonajesService.getBySerieId(parseInt(params['serieId'])) //devuelve array de PERSONAJES
});

}



}
