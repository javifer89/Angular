import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  private arrContactos: Contacto[]; //mediante PRIVATE solo podremos acceder a este arrContactos en este archivo TS mediante métodos/funciones creadas en este servicio.

  constructor() {
    this.arrContactos = [
      // en este momento especificamos cómo queremos que se encuentre el Array al arrancar la aplicación, puede estar vacío, puede tener información externa o creada por nosotros.
      {
        nombre: 'Mario',
        apellidos: 'Girón',
        email: 'mario@gmail.com',
        telefono: '685828123',
        edad: 29,
        visible: true,
      },
      {
        nombre: 'Pepe',
        apellidos: 'Fernández',
        email: 'mario@gmail.com',
        telefono: '685828123',
        edad: 49,
        visible: false,
      },
      {
        nombre: 'Mariola',
        apellidos: 'García',
        email: 'mario@gmail.com',
        telefono: '685828123',
        edad: 39,
        visible: false,
      },
      {
        nombre: 'Laura',
        apellidos: 'Gutierrez',
        email: 'mario@gmail.com',
        telefono: '685828123',
        edad: 22,
        visible: true,
      },
    ];
  }

  getAll(): Contacto[] {
    return this.arrContactos;
  }
  //Se encarga de agregar un nuevo contacto al array
  create(nuevoContacto: Contacto): void {
    this.arrContactos.push(nuevoContacto);
  }

  //Método que me devuelve un array con los contactos visibles
  getVisibles(): Contacto[] {
    return this.arrContactos.filter((contacto) => contacto.visible);
  }
  // getVisiblesV2(): Contacto[] {
  //   const arr: Contacto[] = [];
  //   for (let contacto of this.arrContactos) {
  //     if (contacto.visible) {
  //       arr.push(contacto);
  //     }
  //   }
  //   return arr;
  // }

  filterByAge(edad: number): Contacto[] {
    return this.arrContactos.filter((contacto) => contacto.edad > edad);
  }
  deleteContact(indice: number) {
    this.arrContactos.splice(indice, 1);
  }
}

/**
 *Creación de componente FORMULARIO
 *Creación de ruta: '/contactos/new' --> FormularioComponent
 *Dentro del componente FORMULARIO mostramos los campos necesarios para crear un contacto
 *Permitir el uso de ngModel
 *Pintar el formulario
 *Asociar los campos del formulario con una propiedad de la clase a través de ngModel
 *Cuando pulse el botón de envio del formulario, hacemos console.log del objeto con los datos
 */

/**
 * Rellenar el formulario
 * pulsar el botón enviar (agrega el nuevo contacto al array)
 * Acceder a la url/contactos
 */
