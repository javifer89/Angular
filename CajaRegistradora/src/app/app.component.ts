import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'CajaRegistradora';

  arrComida: Producto[];
  arrBebida: Producto[];


  constructor() {
    this.arrComida = [
      { nombre: 'Paella', imagen: 'https://nomen.es/wp-content/uploads/2020/09/trucos-paella-perfecta.jpg', precio: 9.90 },
      { nombre: 'Cocido', imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg', precio: 11 },
      { nombre: 'Macarrones con tomate', imagen: 'https://www.rebanando.com/uploads/media/maxresdefault-jpg-19.jpeg', precio: 6.50 },
      { nombre: 'Cazón', imagen: 'https://lacocinademasito.com/wp-content/uploads/2019/12/Cazon-en-adobo-2.jpg', precio: 7.90 },
    ];
    this.arrBebida = [
      { nombre: 'Coca-cola', imagen: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', precio: 2.50 },
      { nombre: 'Fanta Naranja', imagen: 'https://www.supereko.net/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/l/a/lata_330ml_fanta_go_naranja.jpg', precio: 2.23 },
      { nombre: 'Cerveza', imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/11/6113832151c5c.jpeg', precio: 1.80 },
      { nombre: 'Agua', imagen: 'https://folder.es/41611-large_default/caja-de-35-botellas-de-agua-nestle-aquarel-033l.jpg', precio: 1.20 },
    ];
  }

facturaCompra($event: Producto){
 const productosSeleccionados = $event.
}

}
