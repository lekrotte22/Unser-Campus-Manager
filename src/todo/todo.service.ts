import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { v4 as uuid } from 'uuid';
import { TodoInterface } from './todo.interface';

@Injectable()
export class TodoService {
  private todos: TodoInterface[] = [];

  create(createTodoDto: CreateTodoDto) {
    const newTodo: TodoInterface = {
      id: uuid(),
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return this.todos;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo ?? 'Not found';
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return 'Not found';
    }

    this.todos[index] = {
      ...this.todos[index],
      ...updateTodoDto,
    };
    return this.todos[index];
  }

  remove(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return 'Not found';
    }

    const [removed] = this.todos.splice(index, 1);
    return removed;
  }
}
