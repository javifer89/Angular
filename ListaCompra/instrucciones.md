## General
-instalar bootstrap
# componente formulario
-objetivo: formulario que va a permitir al usuario rellenar lo que quiere comprar

```html
<formulario></formulario>
```

-Maquetar el formulario (Sin usar la etiqueta form).
-Reto 1: usar ngModel para capturar los datos del formulario
    -cuando pulsemos el botón enviar debemos mostra rpor consola un objeto con todos los datos del formulario

    ```js
    {
        nombre:"pan",
        "precio": 5 ,
        "unidaddes": 2 ,
        "departamento":"panaderia "
    }
    ```

-Reto 2: conseguir hacer un console.log del nuevo producto dentro de app.component.ts
    -hay que generar un @output dentro del formulario
    -ese @output debe transmitir el Producto
    -Dentro del componente padre podemos capturar los datos a través del @output

-Reto 3: dentro de appComponent hay que generar una propiedad que represente el array de Productos (arrProductos)
    -cuando recibimos el nuevo producto, agregamos al array
    -una vez insertado hacemos log del array e insertamos varios productos. 
    Qué sucede?...


## componente ListaProductos
-crear el componente
```html
 <lista-productos></lista-productos>
´´´
-Reto 4: crear el componente con el input de entrada. En el html de la lista mostrar lo siguiente:

```html
<p>{{ productos.length }}</p>
```
