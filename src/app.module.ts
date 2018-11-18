import { Module } from '@nestjs/common';
import { MongooseModule } from '@netjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
