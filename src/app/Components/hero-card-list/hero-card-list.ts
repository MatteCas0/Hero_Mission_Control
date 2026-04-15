import { Component } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';

@Component({
  selector: 'app-hero-card-list',
  imports: [CommonModule, HeroCard],
  templateUrl: './hero-card-list.html',
  styleUrl: './hero-card-list.css',
})
export class HeroCardList {
  heroes: Hero[] = [
    {
      "id": 1,                                                                              
      "nome": "Superman",
      "potere": "Super forza e volo",
      "completata": false
    },
    {
      "id": 2,
      "nome": "Spider-Man",
      "potere": "Ragnatele e agilità",
      "completata": false
    },
    {
      "id": 3,
      "nome": "Batman",
      "potere": "Intelligenza e gadgets",
      "completata": false
    },
    {
      "id": 4,
      "nome": "Wonder Woman",
      "potere": "Lasso della verità",
      "completata": false
    },
    {
      "id": 5,
      "nome": "Flash",
      "potere": "Super velocità",
      "completata": false
    }
  ];

  markAsDone(hero: Hero) : void {
    hero.completata = true;
  }

  get totalCompleted(): number{
    return this.heroes.filter(h => h.completata).length;
  }
}
