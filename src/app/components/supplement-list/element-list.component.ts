import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Element } from '../../models/element';
import {combineLatest, map, Observable, Subject, takeUntil} from "rxjs";
import {formatWordForUrl} from "../../utils/url-formater.utils";

@Component({
    selector: 'app-element-list',
    imports: [CommonModule, RouterModule],
    templateUrl: './element-list.component.html',
    styleUrl: './element-list.component.scss'
})
export class ElementListComponent {

  private destroy$ = new Subject<void>();

  elements$: Observable<Element[]>;
  filteredElements$: Observable<Element[]>;
  lang$: Observable<string>;
  categoryType$: Observable<string>;

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

    this.categoryType$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => data['categoryType'] as string),
        )

    this.filteredElements$ = combineLatest([
        this.elements$,
        this.lang$,
        this.categoryType$,
    ]).pipe(
        takeUntil(this.destroy$),
        map(([elements, lang, categoryType]) => {
          return elements.filter(element =>
              element.category.language === lang &&
              formatWordForUrl(element.category.type) === categoryType &&
              !!element.imageUrl
          );
        })
    );
  }

  protected formatWordForUrl(word: string): string {
    return formatWordForUrl(word)
  }
}