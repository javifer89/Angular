import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { SERIE } from '../interfaces/serie.interface';
//A partir de aquí ya puedo trabajar con el array de SERIES
@Injectable({
  providedIn: 'root',
})
export class ServicioSeriesService {
  SERIES: SERIE[] = [];

  getAll(): SERIE[] {
    return SERIES;
  }

  create(nuevaSerie: SERIE): void {
    SERIES.push(nuevaSerie);
  }

  // deleteSerie(indice: number) {
  //   SERIES.splice(indice, 1);
  // }

  getChannel(): string[] {
    const arr: string[] = [];
    for (let serie of SERIES) {
      if (!arr.includes(serie.canal)) {
        arr.push(serie.canal);
      }
    }
    return arr;
  }

  // MEJORADA
  //getCanalesV2(): string[] {
  //   const arr = SERIES.map((serie) => {
  //     return serie.canal;
  //   });
  //   const objSet = new Set(arr);
  //   const final = [...objSet];
  //   return final;
  // }

// REFACTORIZADA
// getCanalesV2(): string[] {
//     return [...new Set(SERIES.map(serie => serie.canal))];
//   }




// mostrar los canales recuperados en un select dentro del html
// cuando cambie el select, filtramos las series por canal
filterByChannel() {
  const serieFiltrada: string[] = [];
  for (let serie of SERIES) {
    SERIES.filter(canal)
  }
  return arr.filter((serie) => serie.canal);
}


}
