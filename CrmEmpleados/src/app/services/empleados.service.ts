import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private httpClient = inject(HttpClient);

  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://crmempleados.ngrok.io/api/empleados';
  }

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl, this.createHeaders())
    );
  }

  create(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValue, this.createHeaders())
    );
  }

  update(empleadoId: string, formValue: any) {
    return firstValueFrom(
      this.httpClient.put<any>(
        `${this.baseUrl}/${empleadoId}`,
        formValue,
        this.createHeaders()
      )
    );
  }

  deleteEmpleado(empleadoId: string) {
    return firstValueFrom(
      this.httpClient.delete(
        `${this.baseUrl}/${empleadoId}`,
        this.createHeaders()
      )
    );
  }

  getById(empleadoId: string) {
    return firstValueFrom(
      this.httpClient.get<any>(
        `${this.baseUrl}/${empleadoId}`,
        this.createHeaders()
      )
    );
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('token_empleados')!,
      }),
    };
  }
}
