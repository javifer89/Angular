import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private httpClient = inject(HttpClient);

  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://peticiones.online/api/users';
  }

  getAllUsers(page: number = 1) {
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl)
    );
  }

  create(formValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValue)
    );
  }

  getById(userId : string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${userId}`)
    );
  }
  update(userId : string, formValue: any) {
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/${userId}`, formValue)
    );
  }
}
