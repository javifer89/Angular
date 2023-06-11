import { Component } from '@angular/core';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoTasks: Task[];
  doneTasks: Task[];

  constructor() {
    this.todoTasks = [];
    this.doneTasks = [];
  }

  onSendNewTask($event: Task) {
    this.todoTasks.push($event);
    console.log(this.todoTasks);
  }

  onTaskSelected($event: number) {
    const arrDeleted = this.todoTasks.splice($event, 1)
    this.doneTasks.push(arrDeleted[0])

  }
  onTaskUndo ($event: number) {
  const arrDeleted = this.doneTasks.splice($event, 1);
  this.todoTasks.push(arrDeleted[0])
}
}
