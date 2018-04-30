import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: '../app/components/home/home.module#HomeModule'
  },
  {
    path: 'chapter',
    loadChildren: '../app/components/chapters/chapter.module#ChapterModule'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
