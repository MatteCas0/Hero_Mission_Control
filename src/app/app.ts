import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroCardList } from './Components/hero-card-list/hero-card-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroCardList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HeroMissionControl');
}
