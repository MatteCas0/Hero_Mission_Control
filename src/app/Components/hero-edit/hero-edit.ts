import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit() {
    this.heroId = this.route.snapshot.paramMap.get('id');
    
  }

  salvaHero() {
    //this.onSalva.emit(this.hero);
  }

  reset() {
    this.hero = {} as Hero;
  }
}
