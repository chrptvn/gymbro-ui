import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './page.component.html',
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
