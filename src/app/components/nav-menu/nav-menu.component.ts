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
          <span class="hover-effect"></span>
        </button>
      }
    </nav>
  `,
  styles: [`
    .nav-menu {
      background: var(--secondary);
      padding: 1rem;
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      border-top: 4px solid var(--primary);
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    button {
      background: transparent;
      color: white;
      border: 2px solid var(--primary);
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s;
    }
    .hover-effect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary);
      transform: translateX(-100%);
      transition: transform 0.3s;
      z-index: 0;
    }
    button:hover .hover-effect {
      transform: translateX(0);
    }
    button:hover {
      color: white;
    }
    button.active {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
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