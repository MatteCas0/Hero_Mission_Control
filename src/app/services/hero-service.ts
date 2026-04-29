import { Injectable } from '@angular/core';
import { Hero } from '../Models/Hero-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {


   private apiUrl = 'https://crudcrud.com/api/39a9d9a6153744f69bab082be2958579/hero'; // Sostituisci con la tua API

  constructor(private http: HttpClient) { }



  get heroesList(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }


  /*
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
      return true;
    }else {
      $event.id = this.heroes.length + 1;
      this.heroes.push($event);
      return true;
    }

    return false;

  }

  getHero(heroId: string | number) {
    const h = this.heroes.find(h => h.id === +heroId);
    if (!h) {
      return {} as Hero;
    } else {
      return { ...h };
    }
  }

  */
}
