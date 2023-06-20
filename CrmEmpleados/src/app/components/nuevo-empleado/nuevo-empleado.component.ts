import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css'],
})
export class NuevoEmpleadoComponent {
  formulario: FormGroup;
  errores: any[]
  empleadosService = inject(EmpleadosService);
  router = inject(Router);
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      departamento: new FormControl(),
      salario: new FormControl(),
    });
    this.errores = []
  }

  async onSubmit() {
    const response = await this.empleadosService.create(this.formulario.value);
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
