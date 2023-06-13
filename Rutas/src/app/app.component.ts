import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



//inyección de dependencias (pedimos a Angular un objeto y Angular se encarga de entregarlo inicializado)

router = inject(Router) //se inicializa directamente, sin el constructor

cambiarRuta(ruta: string) {
  this.router.navigate([ruta])
}

}
