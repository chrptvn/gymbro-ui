import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { NavMenuComponent } from './app/components/nav-menu/nav-menu.component';
import { routes } from './app/app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMenuComponent, RouterModule],
  template: `
    <div class="app-container">
      <header>
        <div class="header-content">
          <h1>GymBro.ca</h1>
          <p>Your Trusted Source for Supplement Information</p>
        </div>
      </header>
      <app-nav-menu />
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
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
    }
  `]
})
export class App {
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes)
  ]
});