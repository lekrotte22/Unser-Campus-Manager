import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { TodoModule } from './todo/todo.module';
import { KalenderModule } from './kalender/kalender.module';
//import { StundenplanModule } from './stundenplan/stundenplan.module';
import { AuthGuard, KeycloakConnectModule } from 'nest-keycloak-connect';
import { Kalender } from './kalender/entities/kalender.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
import { TodoModule } from './todo/todo.module';
import { StundenplanModule } from './stundenplan/stundenplan.module';
import { Todo } from './todo/entities/Todo';
import { Stundenplan } from './stundenplan/entities/Stundenplan.entity';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8081',
      realm: 'master',
      clientId: 'campus_fe',
      secret: 'qT16wR8O9gvjrDu9bzBQH7w9zjIoowKD',
    }),
    TodoModule,
    KalenderModule,
    StundenplanModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'CM',
      entities: [Kalender, Todo, Stundenplan],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
