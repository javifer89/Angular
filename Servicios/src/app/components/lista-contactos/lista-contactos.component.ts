import { Component, inject } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

contactosService = inject(ContactosService)

contactos: Contacto[];

constructor(){
  this.contactos = []
}
ngOnInit() {
  this.contactos = this.contactosService.getAll();
}
//En el HTML de la lista de contactos creamos un BOTON y cuando pulsemos el botón aparecen los contactos visibles
onClickVisibles(){
  this.contactos = this.contactosService.getVisibles();
}

//Botón que al pulsarlo me devuelva todos los contactos de nuevo
onClickAllContacts(){
  this.contactos = this.contactosService.getAll();
}
onFilterByAge($event:any){
  this.contactos = this.contactosService.filterByAge($event.target.value);
}

onDeleteContact(indice:number){
this.contactosService.deleteContact(indice);
}
/**
 * Creamos un input de tipo range en el HTML de la lista
 * Capturamos su evento input sobre una función
 * EN EL SERVICIO  creamos una función que retorne un array con los contactos mayores de una edad concreta
 * En el evento input llamamos a la función para poder visualizar estos contactos en el HTML
 */

/**
 * Botón PARA CADA UNO DE LOS CONTACTOS DE LA LISTA
 * Método en el Servicio que nos permita borrar un contacto del array
 * Cuando pulso el botón, ejecuto el método de borrado del servicio
 */


}
