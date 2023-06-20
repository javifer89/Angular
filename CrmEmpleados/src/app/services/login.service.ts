import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);

  registerUrl: string;
  loginUrl: string;
  constructor() {
    this.registerUrl = 'https://crmempleados.ngrok.io/api/usuarios/registro';
    this.loginUrl = 'https://crmempleados.ngrok.io/API/usuarios/login';
  }

  createUser(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.registerUrl, formValue)
    );
  }

  confirmUser(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.loginUrl, formValue));
  }
}
