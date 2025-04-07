import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  services = [
    {
      id: 1,
      icon: 'fas fa-magic',
      title: 'Épilation Laser',
      description: 'Une solution permanente pour une peau douce et lisse.',
      benefits: ['Résultats durables', 'Sans douleur', 'Pour tous types de peau'],
      price: 'À partir de 50€'
    },
    {
      id: 2,
      icon: 'fas fa-snowflake',
      title: 'Cryolipolyse',
      description: 'Éliminez les graisses localisées sans chirurgie.',
      benefits: ['Non invasif', 'Résultats visibles', 'Récupération rapide'],
      price: 'À partir de 150€'
    },
    {
      id: 3,
      icon: 'fas fa-spa',
      title: 'Soins du Visage',
      description: 'Des soins personnalisés pour une peau rayonnante.',
      benefits: ['Produits naturels', 'Expertise professionnelle', 'Résultats durables'],
      price: 'À partir de 75€'
    }
  ];

  stats = [
    { value: '98%', label: 'Satisfaction client' },
    { value: '1500+', label: 'Clients satisfaits' },
    { value: '4.9', label: 'Note Google' }
  ];
}
