import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplementService } from '../../services/supplement.service';
import { Supplement } from '../../models/supplement';

@Component({
  selector: 'app-supplement-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="supplement-grid">
      @for (supplement of supplements; track supplement.id) {
        <div class="supplement-card">
          <img [src]="supplement.imageUrl" [alt]="supplement.name">
          <h2>{{supplement.name}}</h2>
          <p class="category">{{supplement.category}}</p>
          <p>{{supplement.description}}</p>
          <button (click)="selectSupplement(supplement)">Learn More</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .supplement-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      padding: 2rem;
    }
    .supplement-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .supplement-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }
    .supplement-card h2 {
      margin: 1rem 0;
      color: #333;
    }
    .category {
      color: #666;
      font-size: 0.9rem;
    }
    button {
      background: #2563eb;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
    button:hover {
      background: #1d4ed8;
    }
  `]
})
export class SupplementListComponent implements OnInit {
  supplements: Supplement[] = [];

  constructor(private supplementService: SupplementService) {}

  ngOnInit() {
    this.supplementService.getSupplements().subscribe(
      supplements => this.supplements = supplements
    );
  }

  selectSupplement(supplement: Supplement) {
    console.log('Selected supplement:', supplement);
    // TODO: Implement navigation to detail view
  }
}