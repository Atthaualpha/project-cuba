import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChapterDetailComponent } from './components/chapter-detail/chapter-detail.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: ChaptersComponent
  },
  {
    path: 'articulos/:id',
    component: ChapterDetailComponent
  },
  {
    path: 'shopping',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouter { }
