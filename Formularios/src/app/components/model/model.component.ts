import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {
  formulario: FormGroup;
  emailValue: string;
  constructor() {
    this.emailValue = ''
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(18),
      ]),
      apellidos: new FormControl(null, [
        Validators.required,
        Validators.maxLength(18),
      ]),
      direccion: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      email: new FormControl(null, [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),
      ]),
      edad: new FormControl(null, [this.edadValidator]),
      dni: new FormControl(null, [this.dniValidator]),
      password: new FormControl(null, [
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ]),
      repite_password: new FormControl(null, [Validators.required]),
    }, [  // ARRAY DE VALIDADORES GENÉRICOS, se pasan como 2ºparámetro al FormGroup
      this.passwordValidator
    ]);
  }







  ngOnInit() {
    const emailControl = this.formulario.get('email');
    emailControl?.valueChanges.pipe(debounceTime(500)).subscribe(emailValue => {
      console.log(emailValue); //CONTROLAR LOS CAMBIOS EN UN CAMPO CONCRETO(EMAIL)
      this.emailValue = emailValue;
    })
  }


  onSubmit() {
    console.log(this.formulario.value);
  }

  checkError(field: string, error: string) {
    return (
      this.formulario.get(field)?.hasError(error) &&
      this.formulario.get(field)?.touched
    );
  }

  edadValidator(control: AbstractControl) {
    //Retorno null si NO hay error. Otra cosa si hay error
    const value = control.value;
    if (value >= 18 && value <= 65) {
      return null;
    }
    return { edadvalidator: true };
  }

  dniValidator(control: AbstractControl) {
    const value = control.value;
    const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    const listaLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (expresion_regular_dni.test(value)) {
      let numero = value.substring(0, value.length - 1);
      let capturaLetra = value.substring(value.length - 1, value.length);
      numero = numero % 23;
      let letraSeleccionada = listaLetras.substring(numero, numero + 1);

      if (letraSeleccionada != capturaLetra.toUpperCase()) {
        return { dnivalidator: true };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: true };
    }
  }
  passwordValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repitePasswordValue = form.get('repite_password')?.value;
    if (passwordValue === repitePasswordValue) {
      return null
    } else {
      form.get('repite_password')?.setErrors({ passwordvalidator: 'Las password no coinciden' })
  }
    return { passwordvalidator : 'Las password no coinciden'}
  }

}

//existen validadores a nivel de campo y a nivel de formulario(genéricos)
