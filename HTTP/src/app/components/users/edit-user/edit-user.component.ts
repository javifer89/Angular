import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  activatedRoute = inject(ActivatedRoute);
  usersService = inject(UsersService);

  formulario: FormGroup
  mensajeError: boolean;
  userId: string;

  //crear un formulario con first_name, last_name, username, email, password
  constructor() {
    this.formulario = new FormGroup({  //mediante SETVALUE le asignamos valores por defecto al formulario de EDITAR USUARIO
      first_name: new FormControl(),
      last_name: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
    this.mensajeError = false;
    this.userId = '';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      console.log(params['userId']);

      this.userId = params['userId'];

      //1. recuperar los datos del usuario
      // -objetivo: sacar por consola los datos del usuario seleccionado
      //    -Crear en el servicio de usuarios un método que recupere el usuario por ID (getById) -SEGUIR LOS PASOS QUE MARCA LA API PARA RECUPERAR UN USER
      // -Llamar al método del servicio desde el componente y mostrar en el console.log el usuario recuperado.
      // 2. Rellenar el formulario con esos datos

      const response = await this.usersService.getById(params['userId']);
      console.log(response);
      if (response.error) {
        //Respuesta MAL
        this.mensajeError = true
        Swal.fire({
          title: '¡Error!',
          text: 'El ID del usuario es incorrecto',
          icon: 'error',
        });
      } else {
        //Respuesta BIEN
        this.mensajeError = false;
        delete response._id; // DELETE PARA BORRAR KEYS DE UN OBJETO, NO VALEN LOS MÉTODOS DE ARRAYS
        delete response.id;
        delete response.image;
        this.formulario.setValue(response) //aqui tengo los datos del usuario en la variable response
      }

    });
  }
  async onSubmit() { //Se ejecutará cuando envio el formulario de EDICIÓN
    const response = await this.usersService.update(this.userId, this.formulario.value);
    console.log(response);
  }


}
