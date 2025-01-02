import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (article) {
      <article class="container mx-auto px-4 py-8 max-w-4xl">
        <img [src]="article.imageUrl" [alt]="article.title" 
             class="w-full h-64 object-cover rounded-lg mb-8">
        
        <h1 class="text-4xl font-bold mb-4">{{article.title}}</h1>
        <div class="prose max-w-none mb-8" [innerHTML]="article.content"></div>

        <section class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">Recommended Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (product of article.affiliateProducts; track product.id) {
              <div class="bg-white p-4 rounded-lg shadow">
                <img [src]="product.imageUrl" [alt]="product.name" 
                     class="w-full h-48 object-cover rounded mb-4">
                <h3 class="text-xl font-bold mb-2">{{product.name}}</h3>
                <p class="text-gray-600 mb-4">{{product.description}}</p>
                <p class="text-2xl font-bold text-blue-600 mb-4">${{product.price}}</p>
                <a [href]="product.affiliateLink" target="_blank" 
                   class="block text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                  Check Price
                </a>
              </div>
            }
          </div>
        </section>
      </article>
    }
  `
})
export class ArticleDetailComponent implements OnInit {
  article: Article | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticleById(params['id']).subscribe(
        article => this.article = article
      );
    });
  }
}