import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { Todo } from '../todo/todo';
import { TodosService } from '../../api/api/todos.service';
import { CreateTodoDto } from '../../api/model/createTodoDto';
import { UpdateTodoDto } from '../../api/model/updateTodoDto';

interface TodoItem {
  id: string;
  name: string;
  fertig: boolean;
  abgabedatum: string;
}

@Component({
  selector: 'app-todo-panel',
  standalone: true,
  imports: [FormsModule, Todo, NgForOf, NgIf],
  templateUrl: './todo-panel.html',
  styleUrl: './todo-panel.css',
})
export class TodoPanel implements OnInit {
  newTodoText: string = '';
  todos: TodoItem[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(
    private todosService: TodosService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.isLoading = true;
    this.hasError = false;

    this.todosService.findAllTodos().subscribe({
      next: (data) => {
        this.todos = (data as TodoItem[]) ?? [];
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }

  addTodo(): void {
    const name = this.newTodoText.trim();
    if (!name) {
      return;
    }

    const dto: CreateTodoDto = {
      name,
      fertig: false,
      abgabedatum: new Date().toISOString().split('T')[0],
    };

    this.todosService.createTodo(dto).subscribe({
      next: (data) => {
        this.todos = (data as TodoItem[]) ?? [];
        this.newTodoText = '';
        this.cdr.markForCheck();
      },
      error: () => {
        this.hasError = true;
        this.cdr.markForCheck();
      },
    });
  }

  toggleTodo(todo: TodoItem, fertig: boolean): void {
    const dto: UpdateTodoDto = {
      name: todo.name,
      fertig,
      abgabedatum: todo.abgabedatum,
    };

    this.todosService.updateTodo(todo.id, dto).subscribe({
      next: () => {
        todo.fertig = fertig;
        this.cdr.markForCheck();
      },
      error: () => this.loadTodos(),
    });
  }

  removeTodo(todo: TodoItem): void {
    this.todosService.deleteTodo(todo.id).subscribe({
      next: () => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
        this.cdr.markForCheck();
      },
      error: () => this.loadTodos(),
    });
  }
}
