import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplementService } from '../../services/supplement.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav-menu">
      @for (category of categories; track category) {
        <button
            [class.active]="selectedCategory === category"
            (click)="selectCategory(category)">
          {{category}}
        </button>
      }
    </nav>
  `,
  styles: [`
    .nav-menu {
      background: var(--white);
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;  /* Allow wrapping */
      gap: 1rem;
      overflow-x: hidden; /* Hide horizontal scrollbar */
      border-top: 4px solid var(--primary);
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    button {
      background: transparent;
      color: var(--text);
      border: 2px solid var(--secondary);
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s;
      min-width: 120px;  /* Prevent buttons from shrinking too much */
    }
    button:hover {
      background: var(--secondary);
      color: var(--white);
      transform: translateY(-2px);
    }
    button.active {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--white);
      transform: scale(1.05);
    }
  `]
})
export class NavMenuComponent implements OnInit {
  categories: string[] = [];
  selectedCategory = 'All';

  constructor(private supplementService: SupplementService) {}

  ngOnInit() {
    this.supplementService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}