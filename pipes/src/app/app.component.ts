import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private httpClient = inject(HttpClient)

  precio: number;
  mensaje: string;
  fechaActual: Date;
  numero: number;

  seriesProm!: Promise<any[]>
  constructor() {
    this.precio = 12.0988;
    this.mensaje = 'al pasar la barca me dijo el barquero';
    this.fechaActual = new Date();
    this.numero = 22819.22910

    this.seriesProm = firstValueFrom(this.httpClient.get<any[]>('https://peticiones.online/api/series'))
  }

  ngOnInit() {
    setInterval(() => this.fechaActual = new Date(), 1000) //para poner un reloj
  }

}
