import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <section class="hero">
        <h1>Welcome to GymBro.ca</h1>
        <p>Your destination for supplements, fitness guides, and workout tips.</p>
        <a routerLink="/supplements" class="cta-button">Explore Supplements</a>
      </section>

      <section class="intro">
        <h2>Transform Your Health</h2>
        <p>At GymBro.ca, we provide the tools and knowledge you need to optimize your fitness journey. From expert
          supplement guides to tailored workout plans, we help you take control of your health.</p>
      </section>

      <section class="focus-areas">
        <h2>What We Offer</h2>
        <div class="focus-grid">
          <div class="focus-item">
            <h3>Supplements</h3>
            <p>Learn about the best supplements for muscle growth, recovery, and overall wellness.</p>
            <a routerLink="/supplements">Browse Supplements</a>
          </div>

          <div class="focus-item">
            <h3>Workout Guides</h3>
            <p>Explore fitness routines that suit all levels – from beginners to advanced athletes.</p>
            <a routerLink="/guides">View Workouts</a>
          </div>

          <div class="focus-item">
            <h3>Recovery & Wellness</h3>
            <p>Discover tips on recovery, injury prevention, and maintaining peak performance.</p>
            <a routerLink="/recovery">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [
    RouterLink
  ],
  styles: [`
    .home-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero {
      text-align: center;
      margin-bottom: 4rem;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }

    .hero p {
      font-size: 1.2rem;
      color: var(--text);
      margin-bottom: 2rem;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: var(--cta);
      color: var(--white);
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background: var(--primary);
      transform: translateY(-3px);
    }

    .intro, .focus-areas, .community {
      text-align: center;
      margin-bottom: 4rem;
    }

    .focus-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .focus-item {
      padding: 2rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--white);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .focus-item h3 {
      color: var(--primary);
      margin-bottom: 1rem;
    }

    .focus-item p {
      color: var(--text);
      margin-bottom: 1.5rem;
    }

    .focus-item a {
      color: var(--cta);
      text-decoration: none;
      font-weight: 600;
    }

    .focus-item a:hover {
      text-decoration: underline;
    }
  `]
})
export class HomeComponent {}
