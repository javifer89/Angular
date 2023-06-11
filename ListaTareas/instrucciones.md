## General
-instalar bootstrap
-Crear interface Task (title, text, priority, complete(booblean))

# Componente Formulario
```html
<formulario></formulario>
```
-Maquetar el formulario
-Cuando pulse el botón enviar, mostramos por consola la task creada.
    -Uso de ngModel
    -Creación de la prop que recoja los datos del formulario
    -Capturar el evento click del botón

-Cuando pulsamos el botón enviar, tenemos que emitir el valor de la newTask hacia el componente padre -> @Output
-En el componente padre creamos un nuevo array de Task llamado **todoTasks** y hacemos push de la tarea que recibamos.

# Componente Lista
-recibe una lista de tareas y las muestra

```html
<lista [tasks]="todoTasks" title="to-do"></lista>
<lista [tasks]="doneTasks" title="done"></lista>
```
