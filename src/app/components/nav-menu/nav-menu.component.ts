import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupplementService } from '../../services/supplement.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="nav-menu">
      <ul class="main-menu">
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li class="has-submenu">
          <a routerLink="/supplements" routerLinkActive="active">Supplements</a>
          <ul class="submenu">
            @for (category of categories; track category) {
              <li>
                <a 
                  [routerLink]="['/supplements']" 
                  [queryParams]="{category: category}"
                  routerLinkActive="active">
                  {{category}}
                </a>
              </li>
            }
          </ul>
        </li>
        <li>
          <a routerLink="/about" routerLinkActive="active">About</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .nav-menu {
      background: var(--white);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .main-menu {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      max-width: 1200px;
      margin: 0 auto;
    }

    .main-menu > li {
      position: relative;
    }

    .main-menu > li > a {
      display: block;
      padding: 1rem 2rem;
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: var(--white);
      list-style: none;
      padding: 0.5rem 0;
      min-width: 200px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      border-radius: 0 0 4px 4px;
      z-index: 1000;
    }

    .has-submenu:hover .submenu {
      display: block;
    }

    .submenu a {
      display: block;
      padding: 0.75rem 1.5rem;
      color: var(--text);
      text-decoration: none;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    a:hover {
      color: var(--primary);
      background: rgba(93, 165, 164, 0.1);
    }

    a.active {
      color: var(--primary);
      font-weight: 600;
    }

    .main-menu > li > a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--primary);
    }

    @media (max-width: 768px) {
      .main-menu {
        flex-direction: column;
      }

      .submenu {
        position: static;
        box-shadow: none;
        display: none;
        background: rgba(93, 165, 164, 0.1);
      }

      .has-submenu:hover .submenu {
        display: block;
      }

      .submenu a {
        padding-left: 3rem;
      }
    }
  `]
})
export class NavMenuComponent implements OnInit {
  categories: string[] = [];

  constructor(private supplementService: SupplementService) {}

  ngOnInit() {
    this.supplementService.getCategories().subscribe(
      categories => this.categories = categories
    );
  }
}