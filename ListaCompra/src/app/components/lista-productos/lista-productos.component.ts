import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  @Input() productos: Producto[];

  constructor() {
    this.productos = [];
  }

  borrarProducto(indice: number) {
    this.productos.splice(indice, 1);
  }

}
