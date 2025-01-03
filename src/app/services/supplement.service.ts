import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Supplement } from '../models/supplement';

@Injectable({
  providedIn: 'root'
})
export class SupplementService {
  private supplements: Supplement[] = [
    {
      id: 1,
      name: 'Creatine Monohydrate',
      category: 'Performance',
      description: 'The most well-researched supplement for strength and muscle gains.',
      benefits: [
        'Increases muscle strength and power',
        'Enhances muscle growth',
        'Improves exercise performance'
      ],
      dosage: '5g daily',
      sideEffects: ['Water retention', 'Mild digestive issues'],
      imageUrl: 'https://placeholder.co/400x300'
    },
    {
      id: 2,
      name: 'Whey Protein',
      category: 'Protein',
      description: 'Fast-absorbing protein ideal for post-workout recovery.',
      benefits: [
        'Supports muscle growth',
        'Aids in recovery',
        'Contains essential amino acids'
      ],
      dosage: '20-30g per serving',
      sideEffects: ['May cause bloating if lactose intolerant'],
      imageUrl: 'https://placeholder.co/400x300'
    },
    {
      id: 3,
      name: 'Fish Oil',
      category: 'Health',
      description: 'Rich in omega-3 fatty acids EPA and DHA.',
      benefits: [
        'Supports heart health',
        'Reduces inflammation',
        'Improves brain function'
      ],
      dosage: '1-2g daily',
      sideEffects: ['Fishy burps', 'Mild digestive issues'],
      imageUrl: 'https://placeholder.co/400x300'
    }
  ];

  private categories: string[] = ['All', 'Performance', 'Protein', 'Health'];

  getSupplements(): Observable<Supplement[]> {
    return of(this.supplements);
  }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }

  getSupplementsByCategory(category: string): Observable<Supplement[]> {
    if (category === 'All') {
      return of(this.supplements);
    }
    return of(this.supplements.filter(sup => sup.category === category));
  }
}