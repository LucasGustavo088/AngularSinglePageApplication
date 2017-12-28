import { Component, OnInit } from '@angular/core';
import { Task } from "../task";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  // @Input()
  // tasks;
  // task:Task = {
  //   name: "",
  //   value: null,
  //   date_launch: "2017-01-01"
  // };
  tasks:Array<Task>;

  constructor(private taskService:TaskService) { 
    this.taskService.tasks.push({
      name: 'teste', 
      value: 10, 
      date_launch: '2017-10-10'
    });
    this.tasks = this.taskService.tasks;
  }

}
