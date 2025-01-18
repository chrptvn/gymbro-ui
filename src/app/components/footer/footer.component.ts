import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'footer.component.html',
  styleUrl: 'footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  currentLanguage: string;

  constructor() {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }
}