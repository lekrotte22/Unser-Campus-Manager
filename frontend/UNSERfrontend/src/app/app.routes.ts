import { Routes } from '@angular/router';
import { authGuard } from './Components/auth-guard';
import { CalendarComponent } from './Components/Calendar/calendar.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: CalendarComponent, canActivate: [authGuard]},
];
