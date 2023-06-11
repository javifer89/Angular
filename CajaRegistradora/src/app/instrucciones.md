## General
-instalar bootstrap

-interface Producto (nombre(string), precio(number), imagen(string, url))

## AppComponent
-Crear e inicializar los arrays de comida y bebida
```js
arrComida: Producto[];
arrBebida: Producto[];
//inicializamos en el constructor
//en la inicialización le metemos unos cuantos productos a cada uno
```
# ListaProductos
-Crear el componente
-Objetivo: Recibe una lista de productos y los muestra
 ```html
<lista-productos titulo="COMIDA" [productos]="arrComida"></lista-productos>
<lista-productos titulo="BEBIDA" [productos]="arrBebida"></lista-productos>
```

-Cuando pulso en el producto (a través de un botón o directamente en la caja del producto) aviso al componente padre de qué producto se ha pulsado.
