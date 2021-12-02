import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this._taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
  }
}
