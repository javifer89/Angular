import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaNgComponent } from './components/mapa-ng/mapa-ng.component';
import { MapaJsComponent } from './components/mapa-js/mapa-js.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mapajs'},
  { path: 'mapang', component: MapaNgComponent },
  { path: 'mapajs', component: MapaJsComponent },
  { path: '**', redirectTo: '/mapajs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
