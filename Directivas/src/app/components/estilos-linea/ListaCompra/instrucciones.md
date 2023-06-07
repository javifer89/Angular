# General

- Instalar Bootstrap
    - Lanzar **npm install bootstrap**
    - Agregar la ruta de bootstrap **en angular.json**

# Componente Formulario

- OBJETIVO: Formulario que va a permitir al usuario rellenar el producto que quiere comprar.

```html
<formulario></formulario>
```

- Maquetar el formulario. (**No usamos la etiqueta form**
- RETO 1: Usar ngModel para capturar los datos del formulario (LEER las instrucciones de uso de ngModel)
    - Cuando pulsemos el botón enviar debemos mostrar por consola un objeto con todos los datos del formulario

```js
{
    "nombre": "Pan",
    "precio": 0.80,
    "unidades": 3,
    "departamento": "panadería"
}
```