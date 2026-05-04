import { Component, Signal, signal } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';
import { HeroEdit } from "../hero-edit/hero-edit";
import { HeroService } from '../../services/hero-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-card-list',
  imports: [CommonModule, HeroCard],
  templateUrl: './hero-card-list.html',
  styleUrl: './hero-card-list.css',
})
export class HeroCardList {

  heroList: Signal<Hero[]> = signal([]);
  totalCompleted: Signal<number> = signal(0);

  constructor(private router: Router, private heroService: HeroService) {
    this.heroList = toSignal(this.heroService.heroesList, { initialValue: [] });
    this.totalCompleted = toSignal(this.heroService.totalCompleted, { initialValue: 0 });
  }

  addHero(hero: Hero) {
    this.heroService.aggiungiHero(hero).subscribe(() => {
      // Dopo aver aggiunto l'eroe, aggiorna la lista degli eroi
      this.heroList = toSignal(this.heroService.heroesList, { initialValue: [] });
      this.totalCompleted = toSignal(this.heroService.totalCompleted, { initialValue: 0 });
    });
  }

  goToAddHero() {
    // Implementation for navigating to the hero add page
    this.router.navigate(['/edit/-1']);
  }
}
