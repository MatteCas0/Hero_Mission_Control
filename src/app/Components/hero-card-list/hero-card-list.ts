import { Component } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';
import { HeroEdit } from "../hero-edit/hero-edit";
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-card-list',
  imports: [CommonModule, HeroCard, HeroEdit],
  templateUrl: './hero-card-list.html',
  styleUrl: './hero-card-list.css',
})
export class HeroCardList {

  heroList: Hero[] = [];
  totalCompleted: number = 0;
  constructor(private heroService: HeroService) {
    this.heroList = this.heroService.heroesList;
    this.totalCompleted = this.heroService.totalCompleted;
  }

  addHero(hero: Hero) {
    this.heroService.aggiungiHero(hero);
  }
}
