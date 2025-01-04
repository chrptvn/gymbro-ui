import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SupplementService } from '../../services/supplement.service';
import { Supplement } from '../../models/supplement';

@Component({
  selector: 'app-supplement-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (supplement) {
      <article class="article-container">
        <div class="article-header">
          <img [src]="supplement.imageUrl" [alt]="supplement.name">
          <h1>{{supplement.name}}</h1>
          <span class="category">{{supplement.category}}</span>
        </div>
        
        <div class="article-content">
          <section>
            <h2>Overview</h2>
            <p>{{supplement.description}}</p>
          </section>

          <section>
            <h2>Benefits</h2>
            <ul>
              @for (benefit of supplement.benefits; track benefit) {
                <li>{{benefit}}</li>
              }
            </ul>
          </section>

          <section>
            <h2>Recommended Dosage</h2>
            <p>{{supplement.dosage}}</p>
          </section>

          <section>
            <h2>Potential Side Effects</h2>
            <ul>
              @for (effect of supplement.sideEffects; track effect) {
                <li>{{effect}}</li>
              }
            </ul>
          </section>

          <a routerLink="/" class="back-button">← Back to Supplements</a>
        </div>
      </article>
    }
  `,
  styles: [`
    .article-container {
      max-width: 800px;
      margin: 2rem auto;
      background: var(--white);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .article-header {
      position: relative;
    }

    .article-header img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .article-header h1 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
      margin: 0;
      color: var(--white);
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      font-size: 2.5rem;
    }

    .category {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--accent);
      color: var(--white);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.8rem;
      text-transform: uppercase;
    }

    .article-content {
      padding: 2rem;
    }

    section {
      margin-bottom: 2rem;
    }

    h2 {
      color: var(--text);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    li:before {
      content: "•";
      color: var(--primary);
      position: absolute;
      left: 0;
    }

    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--cta);
      color: var(--white);
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      margin-top: 2rem;
      transition: all 0.2s;
    }

    .back-button:hover {
      background: var(--primary);
      transform: translateX(-5px);
    }
  `]
})
export class SupplementArticleComponent implements OnInit {
  supplement?: Supplement;

  constructor(
    private route: ActivatedRoute,
    private supplementService: SupplementService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.supplementService.getSupplement(id).subscribe(
        supplement => this.supplement = supplement
      );
    });
  }
}