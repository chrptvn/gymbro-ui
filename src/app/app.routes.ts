import { Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { ElementListComponent } from './components/supplement-list/element-list.component';
import { ArticleComponent } from './components/article/article.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {supplementResolver, supplementsResolver} from "./resolvers/supplementResolver";
import {languageResolver} from "./resolvers/language.resolver";
import {aboutPageResolver, homePageResolver, privacyPolicyPageResolver} from "./resolvers/pageResolver";
import {categoryTypeResolver} from "./resolvers/type.resolver";
import {titleResolver} from "./resolvers/head.resolver";

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
      title: titleResolver,
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
      title: titleResolver,
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
      title: titleResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/privacy-policy',
    component: PageComponent,
    resolve: {
      page: privacyPolicyPageResolver,
      title: titleResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/politique-de-confidentialite',
    component: PageComponent,
    resolve: {
      page: privacyPolicyPageResolver,
      title: titleResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/:categoryType',
    component: ElementListComponent,
    resolve: {
      categoryType: categoryTypeResolver,
      elements: supplementsResolver,
      lang: languageResolver,
      title: titleResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/:categoryType/:category',
    component: ElementListComponent,
    resolve: {
      categoryType: categoryTypeResolver,
      elements: supplementsResolver,
      lang: languageResolver,
      title: titleResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/:categoryType/:category/:supplement',
    component: ArticleComponent,
    resolve: {
      categoryType: categoryTypeResolver,
      element: supplementResolver,
      lang: languageResolver,
      title: titleResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
];