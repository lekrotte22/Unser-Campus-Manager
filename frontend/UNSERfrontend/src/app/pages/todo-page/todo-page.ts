import { Component } from '@angular/core';
import { TodoPanel } from '../../Components/todo-panel/todo-panel';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoPanel],
  template: `<app-todo-panel></app-todo-panel>`,
})
export class TodoPage {}
