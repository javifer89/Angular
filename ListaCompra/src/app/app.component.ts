import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductos: Producto[];

  constructor() {
    this.arrProductos = [];
  }

  onNuevoProducto($event: Producto) {
    this.arrProductos.push($event);
    console.log(this.arrProductos);
  }

}
