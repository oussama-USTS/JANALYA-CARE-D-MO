import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

@Component({
  selector: 'app-temoignages',
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TemoignagesComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sophie Martin',
      photo: '/assets/images/testimonials/woman1.jpg',
      rating: 5,
      comment: 'Une expérience exceptionnelle ! L\'épilation laser a complètement transformé ma routine beauté. Les résultats sont remarquables et le personnel est très professionnel.',
      service: 'Épilation Laser',
      date: '15 Mars 2024'
    },
    {
      id: 2,
      name: 'Marie Dubois',
      photo: '/assets/images/testimonials/woman2.jpg',
      rating: 5,
      comment: 'Je suis ravie des résultats de ma séance de cryolipolyse. L\'équipe est à l\'écoute et très attentionnée. Je recommande vivement !',
      service: 'Cryolipolyse',
      date: '2 Mars 2024'
    },
    {
      id: 3,
      name: 'Julie Lambert',
      photo: '/assets/images/testimonials/woman3.jpg',
      rating: 5,
      comment: 'Le soin du visage était divin ! Ma peau est rayonnante et le massage était très relaxant. Un vrai moment de détente.',
      service: 'Soin du Visage',
      date: '28 Février 2024'
    },
    {
      id: 4,
      name: 'Camille Rousseau',
      photo: '/assets/images/testimonials/woman4.jpg',
      rating: 5,
      comment: 'Excellente prise en charge pour mon épilation laser. Les résultats sont au-delà de mes espérances. Je recommande à 100% !',
      service: 'Épilation Laser',
      date: '20 Février 2024'
    },
    {
      id: 5,
      name: 'Emma Bernard',
      photo: '/assets/images/testimonials/woman5.jpg',
      rating: 5,
      comment: 'Un grand merci pour le soin du visage personnalisé. Ma peau n\'a jamais été aussi belle et lumineuse.',
      service: 'Soin du Visage',
      date: '15 Février 2024'
    },
    {
      id: 6,
      name: 'Sarah Petit',
      photo: '/assets/images/testimonials/woman6.jpg',
      rating: 5,
      comment: 'La cryolipolyse a vraiment fait ses preuves ! Résultats visibles après quelques semaines. Équipe professionnelle et bienveillante.',
      service: 'Cryolipolyse',
      date: '10 Février 2024'
    }
  ];

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
} 