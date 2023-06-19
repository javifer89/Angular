import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private httpClient = inject(HttpClient)

  constructor() {

  }

  getAll(page: number = 1){
     return firstValueFrom(
  this.httpClient.get<any>(`https://peticiones.online/api/products?page=${page}`)
    )
  }


}
