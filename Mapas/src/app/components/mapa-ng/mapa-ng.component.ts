import { Component, inject } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-mapa-ng',
  templateUrl: './mapa-ng.component.html',
  styleUrls: ['./mapa-ng.component.css'],
})
export class MapaNgComponent {
  paisesService = inject(PaisesService);

  arrPaises: any[];

  center: google.maps.LatLng;
  myPosition: google.maps.LatLng | null;
  zoom: number;
  mapTypeId: google.maps.MapTypeId;
  markerOptions: google.maps.MarkerOptions;

  constructor() {
    this.center = new google.maps.LatLng(40, -3);
    this.myPosition = null;
    this.zoom = 18;
    this.mapTypeId = google.maps.MapTypeId.HYBRID;
    this.markerOptions = { animation: google.maps.Animation.BOUNCE };
    this.arrPaises = [];
  }

  async ngOnInit() {
    const response = await this.paisesService.getEurope();
    console.log(response);
    for (let pais of response) {
      this.arrPaises.push({
        position: new google.maps.LatLng(pais.latlng[0], pais.latlng[1]), //accedemos a la clave latlng del array y a las 2 posiciones que dan latitude y longitude
        options: {
          icon: {
            url: pais.flags.svg,
            scaledSize: new google.maps.Size(40, 30),
          },
        },
      });
    }

    // Me imagino como quiero mi array : [{position: new google.maps.LatLng(latitude, longitude}, .. ..]
  }

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      this.myPosition = new google.maps.LatLng(latitude, longitude);
      this.center = this.myPosition;
      this.mapTypeId = google.maps.MapTypeId.HYBRID;
    });
  }
}
