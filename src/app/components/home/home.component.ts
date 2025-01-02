import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">GymBro.ca</h1>
        <p class="text-xl text-gray-600">Your Ultimate Guide to Fitness & Supplements</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (article of articles; track article.id) {
          <app-article-card [article]="article" />
        }
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      articles => this.articles = articles
    );
  }
}