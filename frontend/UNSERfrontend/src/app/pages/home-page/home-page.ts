import { Component } from '@angular/core';
import { KalenderCard } from '../../Components/kalender-card/kalender-card';
import { TodoPanel } from '../../Components/todo-panel/todo-panel';
import { WetterCard } from '../../Components/wetter-card/wetter-card';
import { StundenplanCard } from '../../Components/stundenplan-card/stundenplan-card';
import { HeadBar } from '../../Components/head-bar/head-bar';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeadBar, KalenderCard, TodoPanel, WetterCard, StundenplanCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
