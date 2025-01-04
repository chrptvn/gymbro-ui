import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupplementService } from '../../services/supplement.service';
import { Supplement } from '../../models/supplement';

@Component({
  selector: 'app-supplement-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="supplement-grid">
      @for (supplement of supplements; track supplement.id) {
        <div class="supplement-card">
          <div class="card-image">
            <img [src]="supplement.imageUrl" [alt]="supplement.name">
            <div class="category-badge">{{supplement.category}}</div>
          </div>
          <div class="card-content">
            <h2>{{supplement.name}}</h2>
            <p>{{supplement.description}}</p>
            <a [routerLink]="['/supplement', supplement.id]" class="learn-more">
              Learn More
              <span class="icon">→</span>
            </a>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .supplement-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    .supplement-card {
      border: none;
      border-radius: 12px;
      background: var(--white);
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.2s;
    }
    .supplement-card:hover {
      transform: translateY(-5px);
    }
    .card-image {
      position: relative;
    }
    .supplement-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .category-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--accent);
      color: var(--white);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.8rem;
      text-transform: uppercase;
    }
    .card-content {
      padding: 1.5rem;
    }
    .supplement-card h2 {
      margin: 0 0 1rem;
      color: var(--text);
      font-size: 1.5rem;
      font-weight: 700;
    }
    .learn-more {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--cta);
      color: var(--white);
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      margin-top: 1rem;
      transition: all 0.2s;
    }
    .learn-more:hover {
      background: var(--primary);
      transform: translateX(5px);
    }
    .icon {
      transition: transform 0.2s;
    }
    .learn-more:hover .icon {
      transform: translateX(5px);
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
}