import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Element } from '../../models/element';
import {map, Observable, Subject, takeUntil} from "rxjs";
import {Category} from "../../models/category";

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
  lang$: Observable<String>;

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
            map(data => data['lang'] as String),
        )
  }

  protected formatCategory(category: Category): string {
    return category.name.toLowerCase().replace(/ /g, '-')
  }

  protected formatElement(element: Element): string {
    return element.name.toLowerCase().replace(/ /g, '-')
  }
}