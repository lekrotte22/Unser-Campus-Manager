import { Routes } from '@angular/router';
import { authGuard } from './Components/auth-guard';
import { HomePage } from './pages/home-page/home-page';
import { KalenderPage } from './pages/kalender-page/kalender-page';
import { TodoPage } from './pages/todo-page/todo-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage, canActivate: [authGuard] },
  { path: 'kalender', component: KalenderPage, canActivate: [authGuard] },
  { path: 'todos', component: TodoPage, canActivate: [authGuard] },
];
