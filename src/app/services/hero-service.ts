import { Injectable } from '@angular/core';
import { Hero } from '../Models/Hero-model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {


  private apiUrl = 'https://crudcrud.com/api/1850a7a24589462fb94eab19aedc3912/heroes'; // Sostituisci con la tua API

  constructor(private http: HttpClient) { }



  get heroesList(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  get totalCompleted(): Observable<number>{
    return this.http.get<Hero[]>(this.apiUrl).pipe(
      map(heroes => heroes.filter(h => h.completata).length)
    );
  }

  aggiungiHero($event: Hero) {
    if ($event._id) {
      // esiste già => update
      return this.http.put<Hero>(`${this.apiUrl}/${$event._id}`, $event);
    } else {
      // non esiste => create
      return this.http.post<Hero>(this.apiUrl, $event);
    }
  }

  //mark as done
  markAsDone(hero: Hero) {
    const updatedHero = { ...hero, completata: true };
    return this.http.put<Hero>(`${this.apiUrl}/${hero._id}`, updatedHero);
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`);
  }
}
