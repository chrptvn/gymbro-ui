import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
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

  getArticle(id: number): Observable<string> {
    return this.http.get(`/api/supplements/${id}/article`, { responseType: 'text' });
  }

  getCategories(lang: string): Observable<Category[]> {
    // return this.http.get<Category[]>('/api/categories?lang=' + lang)
    return of([{"id":1,"language":"en","type":"Supplement","name":"Health","description":"elements that promote overall health, immune function, and essential bodily functions."},{"id":2,"language":"en","type":"Supplement","name":"Energy","description":"elements designed to boost energy levels and combat fatigue."},{"id":3,"language":"en","type":"Supplement","name":"Performance","description":"elements that enhance physical and mental performance, stamina, and endurance."},{"id":4,"language":"en","type":"Supplement","name":"Muscle","description":"elements that support muscle growth, repair, and post-workout recovery."},{"id":5,"language":"en","type":"Supplement","name":"Weight Loss","description":"elements that aid in fat burning, appetite suppression, and metabolism boosting."},{"id":6,"language":"en","type":"Supplement","name":"Focus","description":"elements that improve concentration, memory, and mental clarity."},{"id":7,"language":"en","type":"Supplement","name":"Digestion","description":"elements that promote gut health, improve digestion, and enhance nutrient absorption."},{"id":8,"language":"en","type":"Supplement","name":"Detox","description":"elements that help cleanse the body, support liver function, and eliminate toxins."},{"id":9,"language":"en","type":"Supplement","name":"Joint Support","description":"elements that enhance joint flexibility, mobility, and reduce inflammation."},{"id":10,"language":"en","type":"Supplement","name":"Sleep","description":"elements that promote restful sleep and relaxation while reducing stress and anxiety."},{"id":11,"language":"en","type":"Supplement","name":"Hydration","description":"elements that replenish electrolytes, support hydration, and maintain fluid balance."}])
  }
}