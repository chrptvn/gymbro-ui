import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="bg-gray-800 text-white py-4">
      <div class="container mx-auto px-4">
        <a routerLink="/" class="text-xl font-bold">GymBro.ca</a>
      </div>
    </nav>
    
    <router-outlet />
    
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 GymBro.ca - Your Trusted Fitness Resource</p>
      </div>
    </footer>
  `
})
export class AppComponent {}