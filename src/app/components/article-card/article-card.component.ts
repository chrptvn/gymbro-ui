import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img [src]="article.imageUrl" [alt]="article.title" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
        <p class="text-gray-600 mb-4">{{ article.summary }}</p>
        <a [routerLink]="['/article', article.id]" 
           class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Read More
        </a>
      </div>
    </article>
  `,
})
export class ArticleCardComponent {
  @Input() article!: Article;
}