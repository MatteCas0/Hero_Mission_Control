import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../Models/Hero-model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() hero!: Hero;


  constructor(private route: ActivatedRoute, private router: Router,
  private heroService: HeroService) { }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (!heroId) {
      //this.hero = {} as Hero;
    } else {
      this.hero = this.heroService.getHero(heroId);
    }
  }

  notifyParent(){
    this.heroService.markAsDone(this.hero);
  }

  modificaHero(){
    this.router.navigate(['/edit/' + this.hero.id]);
  }
}
