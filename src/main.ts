import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavMenuComponent } from './app/components/nav-menu/nav-menu.component';
import { SupplementListComponent } from './app/components/supplement-list/supplement-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMenuComponent, SupplementListComponent],
  template: `
    <div class="app-container">
      <header>
        <h1>GymBro.ca</h1>
        <p>Your Trusted Source for Supplement Information</p>
      </header>
      <app-nav-menu />
      <main>
        <app-supplement-list />
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #f4f4f5;
    }
    header {
      background: #1a1a1a;
      color: white;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    p {
      margin: 0.5rem 0 0;
      opacity: 0.8;
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

bootstrapApplication(App);