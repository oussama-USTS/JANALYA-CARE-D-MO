import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Soin {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  duration: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-soins',
  templateUrl: './soins.component.html',
  styleUrls: ['./soins.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SoinsComponent {
  categories = ['Tous', 'Épilation', 'Amincissement', 'Visage'];
  selectedCategory: string = 'Tous';

  soins: Soin[] = [
    {
      id: 1,
      title: 'Épilation Laser',
      description: 'Une solution durable pour une peau douce et sans poils. Technologie de pointe adaptée à tous les types de peau.',
      icon: 'fas fa-star',
      benefits: [
        'Résultats durables',
        'Sans douleur',
        'Adapté à tous types de peau',
        'Technologie dernière génération'
      ],
      duration: '30-60 min',
      image: 'assets/images/epilation-laser.jpg',
      category: 'Épilation'
    },
    {
      id: 2,
      title: 'Cryolipolyse',
      description: 'Éliminez les graisses localisées par le froid. Résultats visibles dès la première séance.',
      icon: 'fas fa-snowflake',
      benefits: [
        'Sans chirurgie',
        'Résultats durables',
        'Séance unique',
        'Récupération rapide'
      ],
      duration: '45-60 min',
      image: 'assets/images/cryolipolyse.jpg',
      category: 'Amincissement'
    },
    {
      id: 3,
      title: 'Soin du Visage',
      description: 'Retrouvez une peau éclatante et rajeunie avec nos soins personnalisés.',
      icon: 'fas fa-spa',
      benefits: [
        'Hydratation profonde',
        'Anti-âge',
        'Éclat immédiat',
        'Produits naturels'
      ],
      duration: '60 min',
      image: 'assets/images/soin-visage.jpg',
      category: 'Visage'
    }
  ];

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredSoins() {
    return this.selectedCategory === 'Tous' 
      ? this.soins 
      : this.soins.filter(soin => soin.category === this.selectedCategory);
  }
} 