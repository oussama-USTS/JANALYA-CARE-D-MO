import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SoinsComponent } from './components/soins/soins.component';
import { TemoignagesComponent } from './components/temoignages/temoignages.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'soins',
    component: SoinsComponent
  },
  {
    path: 'temoignages',
    component: TemoignagesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
