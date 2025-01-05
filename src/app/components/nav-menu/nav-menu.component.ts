import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {Observable, Subject, takeUntil} from "rxjs";
import {Category} from "../../models/category";
import {SupplementService} from "../../services/supplement.service";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  private destroy$ = new Subject<void>();

  lang: string = this.getLanguageFromUrl();
  categories$: Observable<Category[]>

  constructor(
      private supplementService: SupplementService
  ) {
    this.categories$ = supplementService.getCategories().pipe(
        takeUntil(this.destroy$),
    )
  }

  private getLanguageFromUrl(): string {
    const pathSegments = window.location.pathname.split('/');
    const lang = pathSegments[1];
    return lang === 'fr' || lang === 'en' ? lang : 'en';
  }

  protected formatCategory(category: Category): string {
    return category.name.toLowerCase().replace(/ /g, '-')
  }
}