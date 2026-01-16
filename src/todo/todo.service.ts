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

  findOne(id: number) {
    this.todos.forEach((todo) => {
      if (parseInt(todo.id) === id) {
        return todo;
      }
    });
    return 'Not found';
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    this.todos.forEach((todo) => {
      if (parseInt(todo.id) === id) {
        const newTodo: TodoInterface = {
          id: uuid(),
          ...updateTodoDto,
        };
        this.todos.splice(parseInt(todo.id));

        this.todos.push(newTodo);
        return newTodo;
      }
    });
  }

  remove(id: number) {
    this.todos.forEach((todo) => {
      if (parseInt(todo.id) === id) {
        this.todos.splice(Number(todo.id));
        return todo;
      }
    });
    return 'Not found';
  }
}
