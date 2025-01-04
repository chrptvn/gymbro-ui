import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SupplementListComponent } from './components/supplement-list/supplement-list.component';
import { SupplementArticleComponent } from './components/supplement-article/supplement-article.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'supplements', component: SupplementListComponent },
  { path: 'supplement/:id', component: SupplementArticleComponent },
  { path: 'about', component: AboutComponent }
];