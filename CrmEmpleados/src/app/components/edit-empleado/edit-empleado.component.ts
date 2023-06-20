import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css'],
})
export class EditEmpleadoComponent {

  activatedRoute = inject(ActivatedRoute);
  empleadosService = inject(EmpleadosService);
  router = inject(Router);

  errores: any[]
  formulario: FormGroup;
  mensajeError: boolean;
  empleadoId: string;

  constructor() {
    this.formulario = new FormGroup({
      //Más abajo,mediante SETVALUE, le asignamos valores por defecto al formulario de EDITAR USUARIO
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      departamento: new FormControl(),
      salario: new FormControl(),
    });
    this.mensajeError = false;
    this.empleadoId = '';
    this.errores = []
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      console.log(params['empleadoId']); // PARAMS es un objeto que devuelve tantas claves como valores variables tenga la URL
      this.empleadoId = params['empleadoId'];

      const response = await this.empleadosService.getById(params['empleadoId']);
      console.log(response);

      if (response.error) {
        //Respuesta MAL
        this.mensajeError = true;
        Swal.fire({
          title: '¡Error!',
          text: 'El ID del usuario es incorrecto',
          icon: 'error',
        });
      } else {
        //Respuesta BIEN
        this.mensajeError = false;
        delete response._id; // DELETE PARA BORRAR KEYS DE UN OBJETO, NO VALEN LOS MÉTODOS DE ARRAYS
        delete response.createdAt;
        delete response.updatedAt;
        this.formulario.setValue(response); //aqui tengo los datos del EMPLEADO en la variable response
      }
    });
  }
  async onSubmit() {
    const response = await this.empleadosService.update(
      this.empleadoId,
      this.formulario.value
    );
    console.log(response);
    if (response.error) {
      const errores = [];
      console.log(response.error);
      console.log(Object.keys(response.error)); //extraemos las claves que contienen errores
      // [ {field: 'nombre', error: 'el error que sea'}, {field: 'apellidos','error: 'el que sea'}]
      for (let key of Object.keys(response.error)) {
        //recorremos el array para acceder a las que tienen error
        console.log(response.error[key].msg); // accedemos al mensaje que contiene cada clave con error
        errores.push({ field: key, msg: response.error[key].msg });
      }
      // console.log(errores)
      this.errores = errores;
      // OPCIÓN DE HACERLO CON MAP
      // const errores2 = Object.keys(response.error).map(key => ({ field: key, msg: response.error[key].msg }));
      // console.log(errores2)
    } else {
      this.router.navigate(['/empleados']);
    }

  }
}
