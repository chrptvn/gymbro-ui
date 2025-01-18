import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Element } from '../models/element';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  getSupplements(): Observable<Element[]> {
    return this.http.get<Element[]>('/api/elements')
  }

  getArticle(id: number): Observable<string> {
    return this.http.get(`/api/pages/article/${id}`, { responseType: 'text' });
  }

  getCategories(lang: string): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories?lang=' + lang)
  }

  getHomePage(lang: string): Observable<string> {
    return this.http.get('/api/pages/home?lang=' + lang, { responseType: 'text' })
  }

  getAboutPage(lang: string): Observable<string> {
    return this.http.get('/api/pages/about?lang=' + lang, { responseType: 'text' })
  }

  getPrivacyPolicyPage(lang: string): Observable<string> {
    return this.http.get('/api/pages/privacy-policy?lang=' + lang, { responseType: 'text' })
  }
}