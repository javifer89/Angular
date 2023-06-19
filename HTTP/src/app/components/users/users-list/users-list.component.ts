import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  usersService = inject(UsersService);

  arrUsers: any[];
  paginaActual: number;
  numPaginas: number;

  constructor() {
    this.arrUsers = [];
    this.paginaActual = 1;
    this.numPaginas = 0;
  }
  ngOnInit() {
    this.cargarUsers()
  }

  async cargarUsers() {
    try {
      const response = await this.usersService.getAllUsers(this.paginaActual);
      this.arrUsers = response.results;
      this.numPaginas = response.total_pages;
    } catch (error) {
      console.log(error);
    }
    console.log(this.arrUsers);
  }

  cambiarPagina(opcion: boolean) {
    if (opcion) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    this.cargarUsers();
  }
}
