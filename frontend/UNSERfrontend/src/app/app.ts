import { Component, signal } from '@angular/core';
import { CalendarComponent } from './Components/Calendar/calendar.component';

@Component({
  selector: 'app-root',
  imports: [CalendarComponent],
  styleUrl: './app.css',
  template: `<app-calendar></app-calendar>`,
})
export class App {
  protected readonly title = signal('UNSERfrontend');
}
