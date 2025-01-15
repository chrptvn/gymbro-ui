import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer>
      <div class="footer-content">
        <p class="copyright">© {{currentYear}} GymBro.ca - All Rights Reserved</p>
        <a routerLink="/{{currentLanguage}}/content-policy" class="policy-link">Content Policy</a>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--deep);
      color: var(--white);
      padding: 1.5rem;
      margin-top: 4rem;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 0 2rem;
    }
    
    .copyright {
      font-size: 0.9rem;
      opacity: 0.9;
      margin: 0;
    }
    
    .policy-link {
      color: var(--white);
      text-decoration: none;
      font-size: 0.9rem;
      opacity: 0.9;
      transition: opacity 0.2s;
    }
    
    .policy-link:hover {
      opacity: 1;
      text-decoration: underline;
    }
    
    @media (max-width: 600px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  currentLanguage: string;

  constructor() {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }
}