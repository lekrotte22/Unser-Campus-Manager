import { Component, OnInit } from '@angular/core';
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

  // ── Passe die URL an dein Backend an ──
  private readonly API_URL = '/api/stundenplan/heute';

  constructor(private http: HttpClient) {}

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
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }
}
