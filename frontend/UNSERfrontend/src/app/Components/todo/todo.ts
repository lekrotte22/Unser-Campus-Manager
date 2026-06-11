import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  standalone: true,
})
export class Todo {
  @Input() title: string = '';
  @Input() completed: boolean = false;

  @Output() toggled = new EventEmitter<boolean>();
  @Output() removed = new EventEmitter<void>();

  get initial(): string {
    return this.title.trim().charAt(0).toUpperCase() || '?';
  }

  onToggle(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.toggled.emit(checked);
  }

  onRemove(): void {
    if (this.completed) {
      this.removed.emit();
    }
  }
}
