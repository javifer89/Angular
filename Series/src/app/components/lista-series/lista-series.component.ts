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

  constructor() {
    this.series = []
  }

  ngOnInit() {
    this.series = this.ServicioSeriesService.getAll()
    const canales = this.ServicioSeriesService.getChannel()
    return canales
  }



onGetChannel(){
  this.series = this.ServicioSeriesService.getChannel();
}
}

onFilterByChannel($event: any) {
 this.series = this.ServicioSeriesService.filterByChannel($event.target.value)
}




//  onDeleteSerie(indice: number){
//   this.series = this.ServicioSeriesService.deleteSerie(indice)
//  }
