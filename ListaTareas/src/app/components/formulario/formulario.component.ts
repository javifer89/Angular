import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  newTask: Task;

  @Output() sendNewTask: EventEmitter<Task>;

  constructor() {
    this.newTask = { title: '', text: '', priority: '', complete: false };
    this.sendNewTask = new EventEmitter();
  }

  onClick() {
    this.sendNewTask.emit(this.newTask);
    this.newTask = { title: '', text: '', priority: '', complete: false };
  }
}
