import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() title: string = '';
  @Input() completed: boolean = false;
}
