import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Supplement } from '../../models/supplement';
import {map, Observable, Subject, takeUntil, tap} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-supplement-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './supplement-list.component.html',
  styleUrl: './supplement-list.component.scss'
})
export class SupplementListComponent {

  private destroy$ = new Subject<void>();

  supplements$: Observable<Supplement[]>;
  lang$: Observable<String>;

  constructor(
      private activatedRoute: ActivatedRoute
  ) {
    this.supplements$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => data['supplements'] as Supplement[]),
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

  protected formatSupplement(supplement: Supplement): string {
    return supplement.name.toLowerCase().replace(/ /g, '-')
  }
}