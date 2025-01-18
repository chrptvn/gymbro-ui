import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
    selector: 'app-home',
    imports: [
        NgIf,
        AsyncPipe
    ],
    templateUrl: './page.component.html',
    standalone: true,
    styleUrl: './page.component.scss'
})
export class PageComponent {
  private destroy$ = new Subject<void>();

  page$: Observable<SafeHtml>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private sanitizer: DomSanitizer
  ) {
    this.page$ = this.activatedRoute.data
        .pipe(
            takeUntil(this.destroy$),
            map(data => this.sanitizer.bypassSecurityTrustHtml(data['page'])),
        )
  }
}
