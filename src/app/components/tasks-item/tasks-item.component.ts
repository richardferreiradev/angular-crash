import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTaskItem: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDeleteTask(task: Task) {
    this.onDeleteTaskItem.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
