import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { NavMenuComponent } from './app/components/nav-menu/nav-menu.component';
import { LanguageSwitchComponent } from './app/components/language-switch/language-switch.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMenuComponent, RouterModule, LanguageSwitchComponent, FooterComponent, NgIf],
  templateUrl: 'main.html',
  styleUrl: 'main.scss',
})
export class App {
  currentLanguage: string = 'en';

  constructor() {
    const pathSegments = window.location.pathname.split('/');
    this.currentLanguage = pathSegments[1] === 'fr' ? 'fr' : 'en';
  }
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes)
  ],
});