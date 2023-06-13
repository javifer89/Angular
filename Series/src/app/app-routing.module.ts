import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: '', redirectTo: '/series' },
  { path: 'series', component: ListaSeriesComponent },
  { path: '**', redirectTo: '/series'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
