import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ElementListComponent } from './components/supplement-list/element-list.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {supplementResolver, supplementsResolver} from "./resolvers/supplementResolver";
import {languageResolver} from "./resolvers/language.resolver";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en',
  },
  {
    path: ':lang',
    component: HomeComponent,
    resolve: {
      lang: languageResolver,
    }
  },
  {
    path: ':lang/supplements',
    component: ElementListComponent,
    resolve: {
      supplements: supplementsResolver,
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
    component: AboutComponent,
    resolve: {
      lang: languageResolver,
    }
  }
];