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
      background: #1a1a1a;
      padding: 1rem;
      display: flex;
      gap: 1rem;
      overflow-x: auto;
    }
    button {
      background: transparent;
      color: white;
      border: 1px solid #333;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
    }
    button.active {
      background: #2563eb;
      border-color: #2563eb;
    }
    button:hover {
      background: #2563eb;
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
    // TODO: Emit event to filter supplements
  }
}