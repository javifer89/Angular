import { Component, inject } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent {
  productosService = inject(ProductosService);

  arrProductos: any[];
  paginaActual: number
  numPaginas: number;
  constructor() {
    this.arrProductos = [];
    this.paginaActual = 1;
    this.numPaginas = 0;
  }

  async ngOnInit() {
    //PROMESA CON THEN-CATCH
    //this.productosService.getAll() // NOS DEVUELVE UNA PROMESA
    //   .then((response) => {  // RESOLUCIÓN POSITIVA
    //     this.arrProductos = response.results;
    //   })
    //   .catch((error) => { // RESOLUCIÓN NEGATIVA
    //     console.log(error);
    //   });

    //PROMESA CON ASYNC - AWAIT
    // 1. colocamos el modificador await delante del método que retorne la promesa
    // 2. colocamos el modificador async delante del ámbito de función donde estamos ejecutando la promesa
    // 3. creamos una variable para recuperar el valor positivo de la promesa(la misma que recibia con THEN)
    // 4. para gestionar el error colocamos la ejecución de la promesa dentro de una estructura de try-catch
    // try {
    //   const response = await this.productosService.getAll();
    //   this.arrProductos = response.results;
    // } catch (error) {
    //   console.log(error);
    // }
    this.cargarProductos()
  }

  async cargarProductos() {
   try {
      const response = await this.productosService.getAll(this.paginaActual);
     this.arrProductos = response.results;
     this.numPaginas = response.total_pages;
    } catch (error) {
      console.log(error);
    }
  }


  cambiarPagina(opcion: boolean) {
    if (opcion) {
      this.paginaActual++
    } else{
    this.paginaActual--
  }
    this.cargarProductos()
  }

}



//-Propiedad paginaActual:number (donde almacenaremos la página actual)
//-Dos botones
//-Cuando pulso en los botones se modifica la página y se vuelven a recuperar los productos de la paginaActual
