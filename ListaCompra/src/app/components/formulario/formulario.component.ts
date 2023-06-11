import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  producto: Producto;

  @Output() nuevoProducto: EventEmitter<Producto>;

  constructor() {
    this.producto = {
      nombre: '', precio: 0, unidades: 0, departamento: ''
    };
    this.nuevoProducto = new EventEmitter();
  }

  envioFormulario() {
    this.nuevoProducto.emit(this.producto);
    this.producto = {
      nombre: '', precio: 0, unidades: 0, departamento: ''
    };
  }

}
