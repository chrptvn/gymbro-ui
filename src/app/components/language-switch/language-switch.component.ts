import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-language-switch',
    imports: [CommonModule, RouterModule],
    templateUrl: './language-switch.component.html',
    standalone: true,
    styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
  currentLanguage: string = 'en';

  constructor(private router: Router) {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }

  switchLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'fr' : 'en';

    this.router.navigate([newLang]).then(() => {window.location.reload();});
  }
}