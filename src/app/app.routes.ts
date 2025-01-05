import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SupplementListComponent } from './components/supplement-list/supplement-list.component';
import { SupplementArticleComponent } from './components/supplement-article/supplement-article.component';
import { AboutComponent } from './components/about/about.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {supplementResolver, supplementsResolver} from "./resolvers/supplement.resolver";
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
    component: SupplementListComponent,
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
    component: SupplementListComponent,
    resolve: {
      supplements: supplementsResolver,
      lang: languageResolver,
    },
    providers: [
      provideHttpClient(withFetch()),
    ],
  },
  {
    path: ':lang/supplements/:category/:supplement',
    component: SupplementArticleComponent,
    resolve: {
      supplement: supplementResolver,
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