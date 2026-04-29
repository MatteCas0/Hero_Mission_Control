import { Component } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';
import { HeroEdit } from "../hero-edit/hero-edit";
import { HeroService } from '../../services/hero-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-card-list',
  imports: [CommonModule, HeroCard],
  templateUrl: './hero-card-list.html',
  styleUrl: './hero-card-list.css',
})
export class HeroCardList {

  heroList: Hero[] = [];
  totalCompleted: number = 0;

  constructor(private router: Router, private heroService: HeroService) {
    this.heroList = this.heroService.heroesList;
    this.totalCompleted = this.heroService.totalCompleted;
  }

  addHero(hero: Hero) {
    this.heroService.aggiungiHero(hero);
  }

  goToAddHero() {
    // Implementation for navigating to the hero add page
    this.router.navigate(['/edit/-1']);
  }
}
