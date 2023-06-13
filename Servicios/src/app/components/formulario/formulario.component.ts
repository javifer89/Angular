import { Component, inject } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nuevoContacto: Contacto;

// injects
contactosService = inject(ContactosService);

constructor() {
  this.nuevoContacto = { nombre: '', apellidos: '', email: '', edad: 0, telefono: '', visible: true };
}

onClick() {
  this.contactosService.create(this.nuevoContacto);
  this.nuevoContacto = { nombre: '', apellidos: '', email: '', edad: 0, telefono: '', visible: true };
}

}
