import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';

const routes: Routes = [
  { path: '', redirectTo: '/series' },
  { path: 'series', component: ListaSeriesComponent },
  { path: 'series/:serieId', component: DetalleSerieComponent },
  { path: '**', redirectTo: '/series'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
