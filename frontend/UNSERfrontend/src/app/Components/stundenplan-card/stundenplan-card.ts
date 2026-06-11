import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Stunde {
  fach: string;
  zeit: string;
  farbe: string;
}

@Component({
  selector: 'app-stundenplan-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stundenplan-card.html',
  styleUrl: './stundenplan-card.css',
})
export class StundenplanCard implements OnInit {
  heute: string = '';
  stunden: Stunde[] = [];
  isLoading: boolean = true;
  hasError: boolean = false;

  // ── Backend laeuft auf Port 3002 ──
  private readonly API_URL = 'http://localhost:3002/stundenplan/heute';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadStundenplan();
  }

  loadStundenplan(): void {
    this.isLoading = true;
    this.hasError = false;

    this.http.get<{ datum: string; stunden: Stunde[] }>(this.API_URL).subscribe({
      next: (data) => {
        this.heute = data.datum;
        this.stunden = data.stunden;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }
}
