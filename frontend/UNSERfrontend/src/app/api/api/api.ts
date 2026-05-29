export * from './app.service';
import { AppService } from './app.service';
export * from './kalender.service';
import { KalenderService } from './kalender.service';
export * from './stundenplan.service';
import { StundenplanService } from './stundenplan.service';
export * from './todos.service';
import { TodosService } from './todos.service';
export const APIS = [AppService, KalenderService, StundenplanService, TodosService];
