import { Routes } from '@angular/router';
import { HeroCardList } from './Components/hero-card-list/hero-card-list';
import { HeroEdit } from './Components/hero-edit/hero-edit';

export const routes: Routes = [
    { path: '', component: HeroCardList },
    { path: 'edit/:id', component: HeroEdit },
    { path: '**', redirectTo: '' }
];
