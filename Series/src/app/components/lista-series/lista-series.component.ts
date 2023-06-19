import { Component, inject } from '@angular/core';
import { SERIE } from 'src/app/interfaces/serie.interface';
import { ServicioSeriesService } from 'src/app/services/servicio-series.service';

@Component({
  selector: 'lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent {

  ServicioSeriesService = inject(ServicioSeriesService)

  series: SERIE[];
  canales: string[];

  constructor() {
    this.series = [];
    this.canales = [];
  }

  ngOnInit() {
    this.series = this.ServicioSeriesService.getAll()
    this.canales = this.ServicioSeriesService.getChannel()
  }

  // onGetChannel() {
  //   this.series = this.ServicioSeriesService.getChannel();
  // }

onFilterByChannel($event: any) {
  this.series = this.ServicioSeriesService.filterByChannel($event.target.value)
}

}
