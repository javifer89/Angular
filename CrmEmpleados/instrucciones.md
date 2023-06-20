## RUTAS 

-/empleados -> components/empleados/ListaEmpleados
-/empleados/new -> components/empleados/NuevoEmpleado

## API
-Crear servicio Empleados.
    -Qué hay que importar en el AppModule? (httpClientModule)
-Habrá que crear 2 métodos :
    -getAll y create

-Para recuperar los empleados:
    -GET https://crmempleados.ngrok.io/api/empleados

-Para crear un Empleado:
    -POST https://crmempleados.ngrok.io/api/empleados
    -En el body agregamos un objeto con: nombre, apellidos, email, telefono, departamento, salario.

-PARA ACTUALIZAR un Empleado (update):
    PUT https://crmempleados.ngrok.io/api/empleados/IDEMPLEADO
    En el body le incluimos un objeto con las modificaciones

-PARA BORRAR un Empleado (deleteById):
    DELETE https://crmempleados.ngrok.io/api/empleados/IDEMPLEADO
    
-PARA RECUPERAR UN ÚNICO Empleado (getById):
    GET https://crmempleados.ngrok.io/api/empleados/IDEMPLEADO


## ListaEmpleados
-Llama al método **getAll** del servicio, recupera todos los empleados y los pinta

## NuevoEmpleado
-Muestra un formulario con todos los datos del nuevo empleado. Cuando enviemos el formulario, llamamos al método create del servicio para poder crear al usuario.
-Cuando el back nos avise de la creación correcta, navegamos a la lista de empleados (si recibo alerta, ruta a la listaEmpleados)

## EditEmpleado
-Muestra un formulario con los datos del empleado a editar.
-Cuando enviamos el formulario, lanzamos el método update pasándole los datos del formulario

-Finalizando:
1. botones en la lista de empleados que nos permitan ir al formulario de edición de cada uno
2. método deleteById en el servicio
3. botón que ejecute deleteById en la lista de empleados
4. Opcional: antes de borrar, preguntamos


## REGISTRO/LOGIN

- /registro -> components/Usuarios/Registro
- /login -> components/Usuarios/Login

-Para registrar un usuario:
    -POST https://crmempleados.ngrok.io/api/usuarios/registro
    -Enviamos en el body: username, email, password

-Para confirmar el login:
    -POST https://crmempleados.ngrok.io/api/usuarios/login
    -Enviamos en el body: email, password
