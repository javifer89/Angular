import { Component, inject } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent {
  empleadosService = inject(EmpleadosService);

  arrEmpleados: any[];

  constructor() {
    this.arrEmpleados = [];
  }
  ngOnInit() {
    this.cargarEmpleados();
  }

  async cargarEmpleados() {
    try {
      const response = await this.empleadosService.getAll();
      console.log(response); //NECESARIO ANALIZAR LA RESPONSE PARA VER QUÉ CLAVES CONTIENE LA API
      this.arrEmpleados = response;
    } catch (error) {
      console.log(error);
    }
    console.log(this.arrEmpleados);
  }

  onDeleteEmpleado(empleadoId: string) {
    Swal.fire({
      title: '¿Estas seguro que quieres eliminar este empleado?',
      text: 'No se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.empleadosService.deleteEmpleado(empleadoId);
        console.log(response);
        Swal.fire('¡Eliminado!', 'El empleado será eliminado.', 'success');
        this.arrEmpleados = await this.empleadosService.getAll();
      }
    });
  }
}
