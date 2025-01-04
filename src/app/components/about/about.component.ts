import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>About GymBro.ca</h1>
      <p>Your trusted source for supplement information and guidance.</p>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class AboutComponent {}