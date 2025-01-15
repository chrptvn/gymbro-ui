import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import {map, Observable, Subject, takeUntil} from "rxjs";
import {Category} from "../../models/category";
import {HttpService} from "../../services/http.service";
import {formatWordForUrl} from "../../utils/url-formater.utils";

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
  types$: Observable<string[]>

  constructor(
      private supplementService: HttpService
  ) {
    this.categories$ = supplementService.getCategories(this.lang).pipe(
        takeUntil(this.destroy$),
    )

    this.types$ = this.categories$.pipe(
        map(categories => Array.from(new Set(categories.map(category => category.type)))),
        takeUntil(this.destroy$)
    );
  }

  protected getLanguageFromUrl(): string {
    const pathSegments = window.location.pathname.split('/');
    const lang = pathSegments[1];
    return lang === 'fr' || lang === 'en' ? lang : 'en';
  }

  protected formatWordForUrl(word: string): string {
    return formatWordForUrl(word)
  }
}