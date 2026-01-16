import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todos')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({
    operationId: 'createTodo',
    summary: 'Create Todo',
  })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @ApiOperation({
    operationId: 'findAllTodos',
    summary: 'findAllTodos',
  })
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @ApiOperation({
    operationId: 'getTodoByIds',
    summary: 'getTodoByIds',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiOperation({
    operationId: 'deleteTodo',
    summary: 'deleteTodo',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
