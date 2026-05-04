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
    console.log(this.heroId);  
    if (this.heroId && this.heroId !== '-1') {
      this.heroService.getHero(this.heroId).subscribe(hero => this.hero = hero);
    } else {
      this.hero = {} as Hero;
    }

    //console.log(this.hero);
  }

  salvaHero() {
    this.heroService.aggiungiHero(this.hero).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  reset() {
    this.hero = {} as Hero;
  }

  home() {
    this.router.navigate(['/']);
  }
}
