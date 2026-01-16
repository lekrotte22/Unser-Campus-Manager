import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { TodoModule } from './todo/todo.module';
import { KalenderModule } from './kalender/kalender.module';
//import { StundenplanModule } from './stundenplan/stundenplan.module';
import { Kalender } from './kalender/entities/kalender.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
@Module({
  imports: [
    //TodoModule,
    KalenderModule,
    //StundenplanModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'CM',
      entities: [Kalender],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
