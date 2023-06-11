import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';


@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  @Input() productos: Producto[];
  @Input() titulo: string;

  @Output() productSelected: EventEmitter<Producto>
  constructor(){
    this.productos = [];
    this.titulo = '';
    this.productSelected = new EventEmitter();
  }

productoSeleccionado(producto: Producto){
this.productSelected.emit(producto)
}

}
