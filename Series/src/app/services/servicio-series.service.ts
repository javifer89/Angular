import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { SERIE } from '../interfaces/serie.interface';
//A partir de aquí ya puedo trabajar con el array de SERIES
@Injectable({
  providedIn: 'root',
})
export class ServicioSeriesService {
  // SERIES: SERIE[] = [];

  getAll(): SERIE[] {
    return SERIES;
  }

  create(nuevaSerie: SERIE): void {
    SERIES.push(nuevaSerie);
  }

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
  filterByChannel(canal: string) : SERIE[] {
    return SERIES.filter(serie => serie.canal === canal)
  }



  //Necsito un método que me devuelva los datos de una única serie - ServicioSeries
  getById(id: number): SERIE {
    let serieSeleccionada: any;
    for (let serie of SERIES) {
      if (serie.id === id) {
        serieSeleccionada = serie;
      }
    }
    return serieSeleccionada;
  }

  getById2(id: number): SERIE | undefined {
    return SERIES.find(serie => serie.id === id)
  }

}
