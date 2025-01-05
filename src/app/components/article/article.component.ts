import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { Element } from '../../models/element';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {map, Observable, Subject, switchMap, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  private destroy$ = new Subject<void>();

  supplement$: Observable<Element>;
  article$: Observable<SafeHtml>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private elementService: ElementService,
      private sanitizer: DomSanitizer
  ) {
    this.supplement$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => data['element'] as Element),
            tap(console.log)
        )

    this.article$ = this.supplement$
        .pipe(
            takeUntil(this.destroy$),
            switchMap(supplement => this.elementService.getArticle(supplement.id)),
            map(article => this.sanitizer.bypassSecurityTrustHtml(article)),
        )
  }
}
