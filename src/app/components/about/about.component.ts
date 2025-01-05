import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About GymBro.ca</h1>
      <p>Welcome to GymBro.ca – your ultimate destination for supplements, fitness tips, and exercise guidance.</p>

      <section class="about-section">
        <h2>Our Mission</h2>
        <p>At GymBro.ca, our mission is to empower you to achieve your health and fitness goals. Whether you're looking to build muscle, lose weight, or boost overall wellness, we're here to provide expert knowledge and trusted recommendations on supplements and fitness routines.</p>
      </section>

      <section class="about-section">
        <h2>Why Choose GymBro.ca?</h2>
        <ul>
          <li><strong>Expert-Backed Information:</strong> Our articles and guides are carefully researched and crafted to provide the most accurate and up-to-date supplement knowledge.</li>
          <li><strong>Comprehensive Fitness Guides:</strong> From workout routines to exercise breakdowns, we cover everything you need to optimize your performance.</li>
          <li><strong>Holistic Health Approach:</strong> We believe in a balanced approach to fitness, incorporating nutrition, supplements, and well-rounded training programs.</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Our Focus Areas</h2>
        <p>GymBro.ca covers a wide range of topics to support your journey to peak fitness:</p>
        <ul>
          <li><strong>Supplements:</strong> In-depth reviews and guides on the best supplements for muscle growth, recovery, and overall health.</li>
          <li><strong>Workout Routines:</strong> Tailored training programs for beginners to advanced lifters.</li>
          <li><strong>Exercise Tips:</strong> Techniques to improve strength, endurance, and form.</li>
          <li><strong>Recovery and Wellness:</strong> Strategies to help your body recover and perform at its best.</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Let's Get Started</h2>
        <p>Explore our content, follow our fitness guides, and start building the best version of yourself today. GymBro.ca is more than just supplements – it's a way of life.</p>
        <a routerLink="/supplements" class="cta-button">Explore Supplements</a>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .about-section {
      margin-top: 3rem;
      text-align: left;
    }

    h1, h2 {
      color: var(--primary);
    }

    p {
      color: var(--text);
      line-height: 1.8;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      padding: 0.75rem 0;
    }

    li::before {
      content: "✔";
      color: var(--accent);
      margin-right: 0.5rem;
    }

    .cta-button {
      display: inline-block;
      margin-top: 2rem;
      padding: 1rem 2rem;
      background: var(--cta);
      color: var(--white);
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s;
    }

    .cta-button:hover {
      background: var(--primary);
      transform: translateY(-3px);
    }
  `]
})
export class AboutComponent {}
