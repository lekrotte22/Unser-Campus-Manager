import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface TodoItem {
  id: number;
  label: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',
})
export class TodoCard implements OnInit {
  items: TodoItem[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  // ── Passe die URL an dein Backend an ──
  private readonly API_URL = '/api/todos';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.isLoading = true;
    this.hasError = false;

    this.http.get<TodoItem[]>(this.API_URL).subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  toggleDone(item: TodoItem): void {
    const updated = { ...item, done: !item.done };
    this.http.patch(`${this.API_URL}/${item.id}`, { done: updated.done }).subscribe({
      next: () => (item.done = updated.done),
    });
  }
}
