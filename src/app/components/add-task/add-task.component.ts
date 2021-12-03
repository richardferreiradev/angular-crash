import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onSaveTask: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  saveTask(task: Task) {
    this.onSaveTask.emit(task);
  }
}
