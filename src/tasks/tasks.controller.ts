import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }
  @Delete(':id')
  async remove(@Param('id') id) {
    return this.tasksService.remove(id);
  }
  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id) {
    return this.tasksService.find(id);
  }
}
