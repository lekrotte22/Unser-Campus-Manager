import { Component } from '@angular/core';
import { Todo } from '../todo/todo';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

interface TodoItem {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-panel',
  imports: [FormsModule, Todo, NgForOf],
  templateUrl: './todo-panel.html',
  styleUrl: './todo-panel.css',
})
export class TodoPanel {
  newTodoText: string = '';
  todos: TodoItem[] = [
    { title: 'Tennis', completed: true },
    { title: 'Tennis', completed: true },
    { title: 'Tennis', completed: true },
  ];

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({
        title: this.newTodoText,
        completed: false,
      });
      this.newTodoText = '';
    }
  }
}
