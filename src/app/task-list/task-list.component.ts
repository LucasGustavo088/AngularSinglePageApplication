import { Component, OnInit } from '@angular/core';
import { Task } from "../task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  task:Task = {
    name: "",
    value: null
  };

  constructor() { }
  
  add(){
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }

  ngOnInit() {
  }

}
