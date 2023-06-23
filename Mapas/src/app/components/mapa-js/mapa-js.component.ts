/// <reference path="../../../../node_modules/@types/google.maps/index.d.ts" />

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-js',
  templateUrl: './mapa-js.component.html',
  styleUrls: ['./mapa-js.component.css'],
})
export class MapaJsComponent {
  @ViewChild('divMapa') divMapa!: ElementRef; // capturamos un elemento HTML para utilizarlo en el TS (DOM), utilizamos el ! para indicar que sí que existe en el HTML el elemento (solo si estamo seguros d ello)
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!: google.maps.Map;
  arrMarker: any[];
  miPosicion!: google.maps.LatLng;

  constructor() {
    this.arrMarker = [];
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const miPosicion = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      this.miPosicion = miPosicion;

      this.mapa.setCenter(miPosicion);
      //incluimos un marcador en nuestra posición
      const marker = new google.maps.Marker({
        position: miPosicion,
        map: this.mapa,
        animation: google.maps.Animation.BOUNCE, // .Drop cae el marcador, bounce salta continuamente
      });
    });
  }

  ngAfterViewInit() {
    // si necesitamos hacer algo especifico cuando la vista ya ha salido por pantalla (ngOnInit)
    this.loadMap();
    this.loadAutocomplete();
    // this.calcularRuta ('Calle Cervantes 12, Villajoyosa', 'Calle Colon 24, Villajoyosa')
  }

  loadMap() {
    const options = {
      // Documentación de google para integrar un mapa
      center: new google.maps.LatLng(40, -3),
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    };

    //incluir el mapa dentro del DIV
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, options); //Hay que añadir nativeElement para acceder al elemento del DOM

    // Capturar click sobre el mapa
    google.maps.event.addListener(this.mapa, 'click', (event: any) => {
      //nos devolverá las coordenadas donde hemos hecho click en el mapa

   const marker = this.addMarker(event.latLng, google.maps.Animation.DROP,'https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif');

      this.arrMarker.push(marker); //añadimos al array el Marker
      console.log(this.arrMarker);

      marker.setDraggable(true); // para mover el marker en el mapa

      google.maps.event.addListener(marker, 'click', (event: any) => {
        marker.setMap(null); //podemos borrar el marker clickando sobre él
      });
      //eventos mouseover y mouseout
      google.maps.event.addListener(marker, 'mouseover', (event: any) => {
        marker.setAnimation(google.maps.Animation.BOUNCE); // la animación se inicia pasando el ratón por encima
      });
      google.maps.event.addListener(marker, 'mouseover', (event: any) => {
        marker.setAnimation(null); // parar la animación
      });
    });
  }

  loadAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.inputPlaces.nativeElement
    ); //Con esta función ya podemos introducir mediante el campo de texto, la ubicación que queremos buscar

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      //cuando cambia la selección, recupero el sitio seleccionado
      const place = autocomplete.getPlace();
      if (place.geometry?.location) {
        // comprobamos si el valor introducido es null o se puede asignar al setCenter. La ? hace que si es null, no devuelve "null.location"(evita continuar con la comprobacion)
        this.mapa.setCenter(place.geometry.location); // El mapa se centrará en la localización que hayamos introducido en el campo de texto
        this.addMarker(place.geometry.location, null, 'https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif') //llamamos a la función addMarker para añadir marcador

        this.calcularRuta(this.miPosicion, place.geometry.location)

      }
    });
  }

  deleteMarker() {
    for (let marker of this.arrMarker) {
      marker.setMap(null);
    }
    this.arrMarker = []; // eliminamos los marcadores del array poniendo el array a 0
  }

addMarker(position: google.maps.LatLng, animation: google.maps.Animation | null, urlImage: string,){
  const marker = new google.maps.Marker({
    position,
    map: this.mapa,
    animation,
    icon: {
      url: urlImage,
      scaledSize: new google.maps.Size(50, 50),
    },
  });
  return marker;
}

  calcularRuta(origen: any, destino: any) {
    //recupera la información de la ruta
    const directionsService = new google.maps.DirectionsService();
    // Pintar la ruta dentro del mapa
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.mapa)

    directionsService.route({
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.WALKING
    }, result => {
      console.log(result)
      directionsRenderer.setDirections(result)
    })
  }


}
/**
 * 1. Creamos un array como propiedad del componente(any[])
 * 2. cada vez que creo un marker lo agrego al array
 * 3. Botón dentro del HTML para borrar marcadores
 * 4. Cuando pulse el botón recorrer el array de markers para borrarlos   -> marker.setMap(null)
 */
