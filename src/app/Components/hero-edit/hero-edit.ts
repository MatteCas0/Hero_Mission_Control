import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {
  @Input() hero: Hero = {} as Hero;

  @Output() onSalva = new EventEmitter<Hero>();

  salvaHero() {
    this.onSalva.emit(this.hero);
  }

  reset() {
    this.hero = {} as Hero;
  }
}
