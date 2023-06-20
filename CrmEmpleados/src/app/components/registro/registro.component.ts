import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  loginService = inject(LoginService);
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.loginService.createUser(
      this.registerForm.value);
    console.log(response);
  }
}
