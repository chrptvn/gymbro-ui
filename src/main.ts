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
        <div class="header-content">
          <h1>GymBro.ca</h1>
          <p>Your Trusted Source for Supplement Information</p>
        </div>
        <div class="header-pattern"></div>
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
    }
    header {
      background: var(--secondary);
      color: white;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .header-content {
      position: relative;
      z-index: 1;
    }
    .header-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, var(--primary) 25%, transparent 25%) -10px 0,
        linear-gradient(-45deg, var(--primary) 25%, transparent 25%) -10px 0,
        linear-gradient(45deg, transparent 75%, var(--primary) 75%) -10px 0,
        linear-gradient(-45deg, transparent 75%, var(--primary) 75%) -10px 0;
      background-size: 20px 20px;
      opacity: 0.1;
    }
    h1 {
      font-size: 3.5rem;
      margin: 0;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--accent);
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

bootstrapApplication(App);