import { Component } from '@angular/core';
import { CalendarComponent } from '../../Components/Calendar/calendar.component';

@Component({
  selector: 'app-kalender-page',
  standalone: true,
  imports: [CalendarComponent],
  template: `<app-calendar></app-calendar>`,
})
export class KalenderPage {}
