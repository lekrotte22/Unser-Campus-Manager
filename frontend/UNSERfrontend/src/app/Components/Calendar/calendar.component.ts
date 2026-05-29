import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBar } from '../head-bar/head-bar';
import { AppService } from '../../Service/AppService';

export interface CalendarDay {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: CalendarEvent[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  color?: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, HeadBar],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  currentDate: Date = new Date();
  selectedDate: Date | null = null;

  CalendarService = inject(AppService);

  weekdays: string[] = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ];

  weeks: CalendarDay[][] = [];

  // Sample events – replace with real data source
  sampleEvents: { [key: string]: CalendarEvent[] } = {
    [this.formatKey(new Date())]: [
      { id: '1', title: 'Vorlesung', color: '#2d7a8a' },
      { id: '2', title: 'Seminar', color: '#e07b3a' },
    ],
  };

  test() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    this.CalendarService.appControllerGetHello().subscribe({
      next: (event: any) => {
        console.log(event);
      },
      error: (e: any) => {
        console.error(e);
      },
    });
  }

  get monthYearLabel(): string {
    const months = [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ];
    return `${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear().toString().slice(-2)}`;
  }

  ngOnInit(): void {
    this.buildCalendar();
    this.test();
  }

  buildCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Monday = 0, adjust getDay() which is Sunday = 0
    let startDow = firstDayOfMonth.getDay(); // 0 = Sun
    startDow = startDow === 0 ? 6 : startDow - 1; // Convert to Mon-based

    const calStart = new Date(firstDayOfMonth);
    calStart.setDate(calStart.getDate() - startDow);

    this.weeks = [];
    const current = new Date(calStart);

    for (let w = 0; w < 6; w++) {
      const week: CalendarDay[] = [];
      for (let d = 0; d < 7; d++) {
        const dateKey = this.formatKey(current);
        week.push({
          date: new Date(current),
          dayNumber: current.getDate(),
          isCurrentMonth: current.getMonth() === month,
          isToday: this.isSameDay(current, new Date()),
          isSelected: this.selectedDate ? this.isSameDay(current, this.selectedDate) : false,
          events: this.sampleEvents[dateKey] || [],
        });
        current.setDate(current.getDate() + 1);
      }
      this.weeks.push(week);

      // Stop if we've passed the end of the month and completed the week
      if (current > lastDayOfMonth && week[6].date >= lastDayOfMonth) {
        break;
      }
    }
  }

  prevMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.buildCalendar();
  }

  nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.buildCalendar();
  }

  selectDay(day: CalendarDay): void {
    this.selectedDate = day.date;
    this.buildCalendar(); // Rebuild to update isSelected flags
  }

  private isSameDay(a: Date, b: Date): boolean {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  private formatKey(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
}
