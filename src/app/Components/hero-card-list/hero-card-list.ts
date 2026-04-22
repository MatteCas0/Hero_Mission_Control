import { Component } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';
import { HeroEdit } from "../hero-edit/hero-edit";

@Component({
  selector: 'app-hero-card-list',
  imports: [CommonModule, HeroCard, HeroEdit],
  templateUrl: './hero-card-list.html',
  styleUrl: './hero-card-list.css',
})
export class HeroCardList {

  heroSelected: Hero = {} as Hero;

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
    hero.completata = !hero.completata;
  }
  
  get totalCompleted(): number{
    return this.heroes.filter(h => h.completata).length;
  }

  aggiungiHero($event: Hero) {
    const heroEsistente = this.heroes.findIndex(h => h.id === $event.id);
    if($event.nome === '' || $event.potere === '' || $event.nome === undefined || $event.potere === undefined){
    alert('Compila tutti i campi!');
    } else if(heroEsistente !== -1){
      this.heroes[heroEsistente] = $event;
    }else {
      $event.id = this.heroes.length + 1;
      this.heroes.push($event);
    }

    this.heroSelected = {} as Hero;
  }

  heroSelezionato(hero: Hero){
    this.heroSelected = { ...hero };
  }


}
