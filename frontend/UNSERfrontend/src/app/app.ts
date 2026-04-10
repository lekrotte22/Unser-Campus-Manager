import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './Components/Calendar/calendar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalendarComponent],
  styleUrl: './app.css',
  template: `<app-calendar></app-calendar>`,

})
export class App {
  protected readonly title = signal('UNSERfrontend');
}
