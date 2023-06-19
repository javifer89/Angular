import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { FormUserComponent } from './components/users/form-user/form-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/new', component: FormUserComponent },
  { path: 'users/edit/:userId', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
