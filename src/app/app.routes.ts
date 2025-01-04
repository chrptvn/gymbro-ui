import { Routes } from '@angular/router';
import { SupplementListComponent } from './components/supplement-list/supplement-list.component';
import { SupplementArticleComponent } from './components/supplement-article/supplement-article.component';

export const routes: Routes = [
  { path: '', component: SupplementListComponent },
  { path: 'supplement/:id', component: SupplementArticleComponent }
];