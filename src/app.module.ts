import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { KalenderModule } from './kalender/kalender.module';
import { StundenplanModule } from './stundenplan/stundenplan.module';

@Module({
  imports: [TodoModule, KalenderModule, StundenplanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
