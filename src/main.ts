import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { NavMenuComponent } from './app/components/nav-menu/nav-menu.component';
import { LanguageSwitchComponent } from './app/components/language-switch/language-switch.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMenuComponent, RouterModule, LanguageSwitchComponent, FooterComponent, NgIf],
  template: `
    <div class="app-container">
      <header>
        <div class="header-content">
          <div class="header-top">
            <app-language-switch />
          </div>
          <h1>GymBro.ca</h1>
          <p *ngIf="currentLanguage === 'en'">Unlock Your Potential – Fitness and Supplements.</p>
          <p *ngIf="currentLanguage === 'fr'">Libérez Votre Potentiel – Fitness et Suppléments.</p>
        </div>
      </header>
      <app-nav-menu />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background: var(--deep);
      color: var(--white);
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
    }
    .header-content {
      position: relative;
      z-index: 1;
    }
    .header-top {
      position: absolute;
      top: -2rem;
      right: 0;
    }
    h1 {
      font-size: 3.5rem;
      margin: 0;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--white);
      text-shadow: 2px 2px 0 var(--primary);
    }
    p {
      margin: 0.5rem 0 0;
      font-size: 1.2rem;
      opacity: 0.9;
    }
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      flex: 1;
    }
  `]
})
export class App {
  currentLanguage: string = 'en';

  constructor() {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes)
  ],
});