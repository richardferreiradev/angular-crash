import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();
  addTask: boolean = false;
  title: string = 'Task Tracker';
  constructor() {}

  ngOnInit(): void {}
  toggleAddTask() {
    this.addTask = !this.addTask;
  }
}
