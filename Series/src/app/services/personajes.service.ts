import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personaje.db';
import { PERSONAJE } from '../interfaces/personaje.interface';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() {


  }

  //Necesito un método que me devuelva los personajes de una serie concreta
  getBySerieId(serieId: number) : PERSONAJE[] {
//Los personajes tienen una propiedad serie donde tenemos el id de la serie a la que pertenecen
return PERSONAJES.filter(personaje => personaje.serie === serieId)
  }

}
