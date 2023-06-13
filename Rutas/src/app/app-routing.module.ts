import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LibroComponent } from './components/libro/libro.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'info', component: InfoComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'productos/:productoId', component: ProductoComponent},
  {path:'autores/:autorId/libros/:libroId', component: LibroComponent},
  {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//Info, About, Contact, Home
