import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kalender-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kalender-card.html',
  styleUrl: './kalender-card.css',
})
export class KalenderCard implements OnInit {
  today: Date = new Date();
  currentDate: Date = new Date();
  selectedDay: number = this.today.getDate();

  weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  get headerText(): string {
    return this.currentDate.toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
    });
  }

  get weeks(): (number | null)[][] {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const days: (number | null)[] = [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...Array(firstDay).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }
    return weeks;
  }

  isToday(day: number | null): boolean {
    if (!day) return false;
    const d = this.today;
    return (
      day === d.getDate() &&
      this.currentDate.getMonth() === d.getMonth() &&
      this.currentDate.getFullYear() === d.getFullYear()
    );
  }

  isSelected(day: number | null): boolean {
    return !!day && day === this.selectedDay;
  }

  selectDay(day: number | null): void {
    if (day) this.selectedDay = day;
  }

  ngOnInit(): void {
    this.selectedDay = this.today.getDate();
  }
}
