import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplement } from '../models/supplement';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class SupplementService {
  constructor(private readonly http: HttpClient) {}

  getSupplements(): Observable<Supplement[]> {
    return this.http.get<Supplement[]>('/api/supplements')
  }

  getSupplement(id: number): Observable<Supplement> {
    return this.http.get<Supplement>('/api/supplements/' + id)
  }

  getArticle(id: number): Observable<string> {
    return this.http.get(`/api/supplements/${id}/article`, { responseType: 'text' });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories')
  }
}