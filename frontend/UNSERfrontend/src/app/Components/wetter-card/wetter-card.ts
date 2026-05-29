import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface WetterTag {
  tag: string;
  datum: string;
  iconTag: string;   // emoji or icon class
  iconNacht: string;
  tagTemp: string;
  nachtTemp: string;
}

@Component({
  selector: 'app-wetter-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wetter-card.html',
  styleUrl: './wetter-card.css',
})
export class WetterCard {
  ort: string = 'St Johann';

  tage: WetterTag[] = [
    {
      tag: 'Freitag',
      datum: '3.10.',
      iconTag: '☀️',
      iconNacht: '☀️',
      tagTemp: '2°C / 12°C',
      nachtTemp: '-4°C / 12°C',
    },
    {
      tag: 'Samstag',
      datum: '4.10.',
      iconTag: '⛅',
      iconNacht: '☁️',
      tagTemp: '1°C / 16°C',
      nachtTemp: '-6°C / 12°C',
    },
    {
      tag: 'Sonntag',
      datum: '5.10.',
      iconTag: '🌧️',
      iconNacht: '🌧️',
      tagTemp: '7°C / 14°C',
      nachtTemp: '2°C / 7°C',
    },
    {
      tag: 'Montag',
      datum: '6.10.',
      iconTag: '☁️',
      iconNacht: '☁️',
      tagTemp: '6°C / 11°C',
      nachtTemp: '1°C / 9°C',
    },
    {
      tag: 'Dienstag',
      datum: '7.10.',
      iconTag: '☁️',
      iconNacht: '☁️',
      tagTemp: '7°C / 14°C',
      nachtTemp: '2°C / 12°C',
    },
  ];
}
