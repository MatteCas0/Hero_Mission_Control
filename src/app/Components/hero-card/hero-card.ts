import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../Models/Hero-model';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() hero!: Hero;
  @Output() onMissionDone = new EventEmitter<Hero>();
  @Output() onHeroModified = new EventEmitter<Hero>();

  notifyParent(){
    this.onMissionDone.emit(this.hero);
  }

  modificaHero(){
    this.onHeroModified.emit(this.hero);
  }
}
