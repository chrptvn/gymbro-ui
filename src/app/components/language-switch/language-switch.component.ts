import {Component, Input} from '@angular/core';
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
  @Input()
  lang: string = 'en';

  constructor(private router: Router) {
  }

  switchLanguage() {
    this.router.navigate([this.lang === 'en' ? 'fr' : 'en']).then(() => {window.location.reload();});
  }
}