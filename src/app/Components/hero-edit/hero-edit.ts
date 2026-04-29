import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {
  hero: Hero = {} as Hero;
  heroId: string | null = null;

  

  constructor(private route: ActivatedRoute, private router: Router,
  private heroService: HeroService) { }

  ngOnInit() {
    this.heroId = this.route.snapshot.paramMap.get('id');
    this.hero = this.heroId ? this.heroService.getHero(this.heroId) : {} as Hero; 
  }

  salvaHero() {
    this.heroService.aggiungiHero(this.hero) ? this.router.navigate(['/']) : null;
  }

  reset() {
    this.hero = {} as Hero;
  }

  home() {
    this.router.navigate(['/']);
  }
}
