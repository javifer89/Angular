import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input() tasks: Task[];
  @Input() title: string;

  @Output() taskSelected: EventEmitter<number>;
  
  constructor() {
    this.tasks = [];
    this.title = '';
    this.taskSelected = new EventEmitter()
  }
 onClick(indice:number){
this.taskSelected.emit(indice);
 }
}
