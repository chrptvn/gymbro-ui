import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Element } from '../../models/element';
import {combineLatest, map, Observable, Subject, takeUntil} from "rxjs";
import {Category} from "../../models/category";
import {formatWordForUrl} from "../../utils/url-formater.utils";

@Component({
  selector: 'app-element-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './element-list.component.html',
  styleUrl: './element-list.component.scss'
})
export class ElementListComponent {

  private destroy$ = new Subject<void>();

  elements$: Observable<Element[]>;
  filteredElements$: Observable<Element[]>;
  lang$: Observable<string>;

  constructor(
      private activatedRoute: ActivatedRoute
  ) {
    this.elements$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => data['elements'] as Element[]),
        )

    this.lang$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => data['lang'] as string),
        )

    this.filteredElements$ = combineLatest([this.elements$, this.lang$]).pipe(
        takeUntil(this.destroy$),
        map(([elements, lang]) => {
          return elements.filter(element => element.category.language === lang);
        })
    );
  }

  protected formatCategory(category: Category): string {
    return formatWordForUrl(category.name)
  }

  protected formatElement(element: Element): string {
    return formatWordForUrl(element.name)
  }
}