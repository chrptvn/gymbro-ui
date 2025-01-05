import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="switch-container">
      <span [class.active]="currentLanguage === 'en'">EN</span>
      <label class="switch">
        <input 
          type="checkbox" 
          [checked]="currentLanguage === 'fr'"
          (change)="switchLanguage()">
        <span class="slider"></span>
      </label>
      <span [class.active]="currentLanguage === 'fr'">FR</span>
    </div>
  `,
  styles: [`
    .switch-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--deep);
      padding: 0.5rem;
      border-radius: 25px;
    }

    span {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }

    span.active {
      color: rgba(255, 255, 255, 1);
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--surface);
      transition: .3s;
      border-radius: 20px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: var(--white);
      transition: .3s;
      border-radius: 50%;
    }

    input:checked + .slider:before {
      transform: translateX(20px);
    }
  `]
})
export class LanguageSwitchComponent {
  currentLanguage: string = 'en';

  constructor(private router: Router) {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }

  switchLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'fr' : 'en';
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.split('/').slice(2).join('/');
    this.router.navigate([newLang, ...pathWithoutLang.split('/')]);
  }
}