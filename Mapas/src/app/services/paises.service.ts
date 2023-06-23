import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private httpClient = inject(HttpClient);
  
  url: string;

  constructor() {
    this.url = 'https://restcountries.com/v3.1/region/europe';
  }

  getEurope() {
    return firstValueFrom(
      this.httpClient.get<any>(this.url)
    );
  }
}


//  crear servicio paises
// incluir HttpClientModule en appmodule
// dentro del servicio crear una función getEurope
//     -GET https://restcountries.com/v3.1/region/europe
// Desde el componente MapaNg llamamos al metodo getEurope para cargar todos los paises
// guardarlos en un array
// en el HTML generamos tantos markers como paises tengamos
