import {Component, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Element } from '../../models/element';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {async, map, Observable, Subject, switchMap, takeUntil} from "rxjs";
import {LeaderBoardAdComponent} from "../ad/leader-board-ad.component";


@Component({
  selector: 'app-article',
  standalone: true,
    imports: [CommonModule, RouterModule, LeaderBoardAdComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  elements$: Observable<Element>;
  sections$: Observable<SafeHtml[]>;
    lang$: Observable<string>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private elementService: HttpService,
      private sanitizer: DomSanitizer
  ) {

    this.elements$ = this.activatedRoute.data.pipe(
        takeUntil(this.destroy$),
        map(data => data['element'] as Element),
    );

    this.sections$ = this.elements$.pipe(
        switchMap(supplement => this.elementService.getArticle(supplement.id)),
        map(articleHtml => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(articleHtml, 'text/html');
          const sectionEls = Array.from(doc.querySelectorAll('section'));

          return sectionEls.map(sectionEl => {
            return this.sanitizer.bypassSecurityTrustHtml(sectionEl.outerHTML);
          });
        })
    );

      this.lang$ = this.activatedRoute.data
          .pipe(
              takeUntil(this.destroy$),
              map(data => data['lang'] as string),
          )
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

    protected readonly async = async;
}