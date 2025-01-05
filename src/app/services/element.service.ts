import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../models/element';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  constructor(private readonly http: HttpClient) {}

  getSupplements(): Observable<Element[]> {
    return this.http.get<Element[]>('/api/supplements')
  }

  getSupplement(id: number): Observable<Element> {
    return this.http.get<Element>('/api/supplements/' + id)
  }

  getArticle(id: number): Observable<string> {
    return this.http.get(`/api/supplements/${id}/article`, { responseType: 'text' });
  }

  getCategories(lang: string): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories?lang=' + lang)
  }
}