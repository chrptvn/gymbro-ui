import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SupplementService } from '../../services/supplement.service';
import { Supplement } from '../../models/supplement';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {map, Observable, Subject, switchMap, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-supplement-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './supplement-article.component.html',
  styleUrl: './supplement-article.component.scss'
})
export class SupplementArticleComponent {

  private destroy$ = new Subject<void>();

  supplement$: Observable<Supplement>;
  article$: Observable<SafeHtml>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private supplementService: SupplementService,
      private sanitizer: DomSanitizer
  ) {
    this.supplement$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => data['supplement'] as Supplement),
            tap(console.log)
        )

    this.article$ = this.supplement$
        .pipe(
            takeUntil(this.destroy$),
            switchMap(supplement => this.supplementService.getArticle(supplement.id)),
            map(article => this.sanitizer.bypassSecurityTrustHtml(article)),
        )
  }
}
