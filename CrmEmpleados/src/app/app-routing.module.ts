import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { EditEmpleadoComponent } from './components/edit-empleado/edit-empleado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: '', component:ListaEmpleadosComponent},
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/new', component: NuevoEmpleadoComponent },
  { path: 'empleados/edit/:empleadoId', component: EditEmpleadoComponent },
  { path: 'usuarios/registro', component: RegistroComponent },
  { path: 'usuarios/login', component: LoginComponent},
  { path: '**', component:ListaEmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
