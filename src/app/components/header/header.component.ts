import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LanguageSwitchComponent} from "../language-switch/language-switch.component";

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule, LanguageSwitchComponent],
    templateUrl: 'header.component.html',
    standalone: true,
    styleUrl: 'header.component.scss'
})
export class HeaderComponent {
  currentLanguage: string;

  constructor() {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }
}