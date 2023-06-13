import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: 'contactos', component: ListaContactosComponent},
  { path: 'contactos/new', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
