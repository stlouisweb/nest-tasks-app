import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel(createTaskDto);
    await newTask.save();
    return newTask;
  }

  async update(id: Number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    task.set(updateTaskDto);
    await task.save();
    return task;
  }

  async remove(id: Number): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id).exec();
  }
  async find(id: Number): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }
  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }
}
