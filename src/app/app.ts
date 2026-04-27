import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeroCardList } from './Components/hero-card-list/hero-card-list';

@Component({
  selector: 'app-root',
  imports: [HeroCardList, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HeroMissionControl');
}
