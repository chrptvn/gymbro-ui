import { Routes } from '@angular/router';
import { PageComponent } from './components/home/page.component';
import { ElementListComponent } from './components/supplement-list/element-list.component';
import { ArticleComponent } from './components/article/article.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {supplementResolver, supplementsResolver} from "./resolvers/supplementResolver";
import {languageResolver} from "./resolvers/language.resolver";
import {aboutPageResolver, homePageResolver} from "./resolvers/pageResolver";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en',
  },
  {
    path: ':lang',
    component: PageComponent,
    resolve: {
      page: homePageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/supplements',
    component: ElementListComponent,
    resolve: {
      elements: supplementsResolver,
      lang: languageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/supplements/:category',
    component: ElementListComponent,
    resolve: {
      elements: supplementsResolver,
      lang: languageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/supplements/:category/:supplement',
    component: ArticleComponent,
    resolve: {
      element: supplementResolver,
      lang: languageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/about',
    component: PageComponent,
    resolve: {
      page: aboutPageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/a_propos',
    component: PageComponent,
    resolve: {
      page: aboutPageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  }
];